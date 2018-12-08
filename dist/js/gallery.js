const displayGallery = (function() {
  

  //cache Dome 
  let displayedPics = document.querySelectorAll('.image-box.displayIt');
  const pics = document.querySelectorAll('.image-box');
  const lightbox = document.getElementById('lightbox');
  const close = document.getElementById('close');
  const overlay = document.getElementById('overlay');
  const thumbnails = document.querySelectorAll('.thumbnail');

  //data 
  let clickedImageSrc; 

  //functions
  function displayOnThePage(numberOfElement) {
    const imageBox = document.querySelectorAll('.image-box');
    for (let i = 0; i < imageBox.length; i++) {
      if (i < numberOfElement) {
        imageBox[i].classList.add('displayIt');
      } else {
        imageBox[i].classList.add('dontDisplayIt');
      }
    }
  }

  //create thumbnails
  function createThumbnails(displayedPics) {
    for (let i = 0; i < displayedPics.length; i++) {
      let thumb = document.createElement('img');
      thumb.className = 'thumbnail';
      document.getElementById('thumb').appendChild(thumb);
      thumb.setAttribute('src', displayedPics[i].children[0].getAttribute('src'));
    }
  }

  //set src to thumbnails
  function setImageForThumbnails(thumbnails){
    thumbnails.forEach(function(el) {
      el.onclick = function() {
        thumbnails.forEach(function(el) {
          el.classList.remove('thumbnail-active');
        })
        lightbox.children[1].setAttribute('src', el.getAttribute('src'));
        el.classList.add('thumbnail-active');
      }
    });
  }

  function highlightThumbnail(){
    thumbnails.forEach(function(el) {
      el.classList.remove('thumbnail-active');
      if (el.getAttribute('src')===clickedImageSrc) {
        el.classList.add('thumbnail-active');
      }
    })
  }
  // functions for events

  function closeLightBox () {
    lightbox.classList.remove('show-it');
  }

  //add event listeners
  function setEventListeners() {
    // event click on all gallery images
    for (let i = 0; i < pics.length; i++) {
      pics[i].addEventListener('click', function(event) {
        lightbox.classList.add('show-it');
        lightbox.children[1].setAttribute('src', event.target.getAttribute('src'));
        clickedImageSrc = event.target.getAttribute('src');
        highlightThumbnail();
      });
    }

    //event close lightbox
    close.addEventListener('click', closeLightBox);
    overlay.addEventListener('click', closeLightBox)
    }

  //public 
  function init(imagesPerPage) {
    displayOnThePage(imagesPerPage);
    let displayedPics = document.querySelectorAll('.image-box.displayIt');
    console.log(displayedPics);
    createThumbnails(displayedPics);
    // let thumbnails = document.querySelectorAll('.thumbnail');
    // setImageForThumbnails(thumbnails);
    setImageForThumbnails(thumbnails);
    highlightThumbnail();
    setEventListeners()
  }

  return {

    init: init,
  
  }

})()    


displayGallery.init(6);


    



  

    
    

    



