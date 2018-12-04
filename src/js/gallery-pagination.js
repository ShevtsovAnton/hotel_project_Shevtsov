const galleryPagination = (function() {
    const targetElement = document.getElementById('pagination');
    // let listClass = 'js-pagination';
    let listItemClass = 'pagination-item';
    let pageNumberAttribute = 'data-page';
    let disabledClass = 'pagination-item-disabled';
    let pagesBeforeAndAfter = 1;
    let stringClass = 'pagination-string';
    let lastItemClass = 'last__item';
    let showInvisibleOffset =  2;

    function  createListItemElement(innerText, listItemClass, listItemClassOpt, pageNumberAttribute, pageNumberAttributeValue) {
        let listItem = document.createElement('li');
        listItem.classList.add(listItemClass);
        if (listItemClassOpt) {
            listItem.classList.add(listItemClassOpt);
        }
        if (pageNumberAttribute) {
            listItem.setAttribute(pageNumberAttribute, pageNumberAttributeValue)
        }
        listItem.textContent = innerText;
        return listItem;
    }

    function clearChildren(parent) {
        while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
        }
    }

    function createListElement(listClass) {
        let element = document.createElement('ul');
        element.classList.add(listClass);
        return element;
    }

    function createContainerElement(containerClass = 'pagination__container') {
        let element = document.createElement('div');
        element.classList.add(containerClass);
        return element;
    }

    function buildPagination(listClass, page, pages) {
        clearChildren(targetElement);
        let paginationContainer = createContainerElement();

        let numbersList = createListElement(listClass);
        let stringList = createListElement(listClass);
            // first page
            if (page - pagesBeforeAndAfter > 1) {
                numbersList.appendChild(createListItemElement(1, listItemClass, null, pageNumberAttribute, 1));
            }
            // dots before and after 
            if (page - pagesBeforeAndAfter > showInvisibleOffset) {
                numbersList.appendChild(createListItemElement('...', listItemClass, disabledClass));
                }
            // generate  middle pages
            for (let i = 1; i <= pages; i++) {
                if ((page+pagesBeforeAndAfter >= i) && (page-pagesBeforeAndAfter <= i)) {
                    if (i == page) {
                        numbersList.appendChild(createListItemElement(i, listItemClass, 'active', pageNumberAttribute, i));
                    } else if (i == pages) {
                        numbersList.appendChild(createListItemElement(pages, listItemClass, lastItemClass, pageNumberAttribute, pages));
                    }
                    else {
                        numbersList.appendChild(createListItemElement(i, listItemClass, null, pageNumberAttribute, i));
                    }
                }
            }
            if (page + pagesBeforeAndAfter <= pages - showInvisibleOffset) {
                numbersList.appendChild(createListItemElement('...', listItemClass, disabledClass));
                }

            // show last item
            if (page + pagesBeforeAndAfter <= pages - (showInvisibleOffset - 1)) {
                numbersList.appendChild(createListItemElement(pages, listItemClass, lastItemClass, pageNumberAttribute, pages));
            }
            // page to link to previous page
            if (page > 1) {
                let prevPage = page - 1;
                stringList.appendChild(createListItemElement('Previous', listItemClass, stringClass, pageNumberAttribute, prevPage));
            }

            // page to link to next page
            if (page < pages) {
                let nextPage = page + 1;
                stringList.appendChild(createListItemElement('Next', listItemClass, stringClass, pageNumberAttribute, nextPage));
            } 
 
            paginationContainer.appendChild(numbersList);
            paginationContainer.appendChild(stringList);
        // return element;
        return paginationContainer;
    }

    // public methods
      function init(page, pages) {
        targetElement.appendChild(buildPagination('js-pagination', page, pages));
      }

      function setPages(number) {
        pages = number;
    } 

    //   export public methods
      return {
        init: init,
        setPages: setPages
      };
}());


itemsPerPage = 6;

galleryItemsArray = document.querySelectorAll('.image-box');
totalItems = document.querySelectorAll('.image-box').length;
totalPages = Math.floor( totalItems / itemsPerPage);
galleryPagination.setPages(totalPages);
galleryPagination.init(1, totalPages);
currentPage = document.querySelector('.pagination-item.active').getAttribute('data-page');
    

function listenToTheClick() {
    let list = document.querySelectorAll('.pagination-item');
    for (let i = 0; i < list.length; i++) {
        if (list[i].classList.contains('pagination-item-disabled')) {
            continue;
        }
        list[i].addEventListener('click', function(e) {
            currentPage = +e.currentTarget.getAttribute('data-page');
            totalPages = Math.floor( totalItems / itemsPerPage);
            let beginIndex = currentPage * itemsPerPage - 1;
            let endIndex = currentPage * itemsPerPage + itemsPerPage - 1;

            for (let i = 0; i < galleryItemsArray.length; i++) {
                if ((i < beginIndex) || (i > endIndex)) {
                    if (galleryItemsArray[i].classList.contains('displayIt')) {
                        galleryItemsArray[i].classList.remove('displayIt');
                        galleryItemsArray[i].classList.add('dontDisplayIt');
                    }
                }
                
                if ((i >= beginIndex) && (i < endIndex)) {
                    if (galleryItemsArray[i].classList.contains('dontDisplayIt')) {
                        galleryItemsArray[i].classList.remove('dontDisplayIt');
                    }
                    galleryItemsArray[i].classList.add('displayIt')
                }  
            }    
            galleryPagination.init(currentPage, totalPages);
            listenToTheClick();
    })
    }
}

listenToTheClick();
    
  
  
 
  

  
  
  
  
  
  
  
  
  