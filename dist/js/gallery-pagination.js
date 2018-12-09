let itemsPerPage = 6;
let currentPage = 1;
let galleryItemsArray = document.querySelectorAll('.image-box');
let totalItems = galleryItemsArray.length;
let totalPages = Math.floor( totalItems / itemsPerPage);

const displayGallery = (function() {
  

    //cache Dome 
    const pics = document.querySelectorAll('.image-box');
    const lightbox = document.getElementById('lightbox');
    const close = document.getElementById('close');
    const overlay = document.getElementById('overlay');

  
    //functions
    function displayOnThePage(numberOfElement, currentPage) {
      const imageBox = document.querySelectorAll('.image-box');
      let beginIndex = (currentPage - 1) * numberOfElement;
      let endIndex = currentPage * numberOfElement;
      for (let i = 0; i < imageBox.length; i++) {
        if ((i >= beginIndex) && (i < endIndex)) {
            if (imageBox[i].classList.contains('dontDisplayIt')) {
                imageBox[i].classList.remove('dontDisplayIt');
            }
            imageBox[i].classList.add('displayIt')
        } else {
          if (imageBox[i].classList.contains('displayIt')) {
              imageBox[i].classList.remove('displayIt');
          }
             imageBox[i].classList.add('dontDisplayIt');
        }
      }
    }
  
    function closeLightBox () {
        lightbox.classList.remove('show-it');
    }
  
    //add event listeners
    function setEventListeners() {
      for (let i = 0; i < pics.length; i++) {
        pics[i].addEventListener('click', function(event) {
          lightbox.classList.add('show-it');
          lightbox.children[1].setAttribute('src', event.target.getAttribute('src'));
        });
      }
  
      //event close lightbox
      close.addEventListener('click', closeLightBox);
      overlay.addEventListener('click', closeLightBox)
      }
  
    //public 
  
    function init(imagesPerPage, currentPage) {
      displayOnThePage(imagesPerPage, currentPage);
      setEventListeners()
    }

    return {
  
      init: init,
    
    }
  
})()         


const galleryPagination = (function() {
    const targetElement = document.getElementById('pagination');
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
                        numbersList.appendChild(createListItemElement(i, listItemClass, 'current', pageNumberAttribute, i));
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


displayGallery.init(itemsPerPage, currentPage);

galleryPagination.setPages(totalPages);
galleryPagination.init(currentPage, totalPages);
    

function listenToTheClick() {
    let list = document.querySelectorAll('.pagination-item');
    for (let i = 0; i < list.length; i++) {
        if (list[i].classList.contains('pagination-item-disabled')) {
            continue;
        }
        list[i].addEventListener('click', function(e) {
            currentPage = +e.currentTarget.getAttribute('data-page');
            totalPages = Math.floor( totalItems / itemsPerPage);
            displayGallery.init(6, currentPage);
            galleryPagination.init(currentPage, totalPages);
            listenToTheClick();
    })
    }
}

listenToTheClick();
    
  
  
 
  

  
  
  
  
  
  
  
  
  