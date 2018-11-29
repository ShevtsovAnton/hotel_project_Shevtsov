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

displayOnThePage(6);


let clickedImageSrc; 
const pics = document.querySelectorAll('.image-box.displayIt');
const lightbox = document.getElementById('lightbox');
const close = document.getElementById('close');
const overlay = document.getElementById('overlay');


pics.forEach(function(el) {
  el.onclick = function(e) {
    lightbox.classList.add('show-it');
    lightbox.children[1].setAttribute('src', el.children[0].getAttribute('src'));
    clickedImageSrc = e.target.getAttribute('src');
    highlightThumbnail()
  } 
});


function highlightThumbnail(){
  thumbnails.forEach(function(el) {
    el.classList.remove('thumbnail-active');
    if (el.getAttribute('src')===clickedImageSrc) {
      el.classList.add('thumbnail-active');
    }
  })
}

function closeLightBox () {
  lightbox.classList.remove('show-it');
}

close.onclick = closeLightBox;
overlay.onclick = closeLightBox;

//generate thumbnails
for (let i = 0; i < pics.length; i++) {
  let thumb = document.createElement('img');
  thumb.className = 'thumbnail';
  document.getElementById('thumb').appendChild(thumb);
  thumb.setAttribute('src', pics[i].children[0].getAttribute('src'));
}

//set src to thumbnails
const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(function(el) {
  el.onclick = function() {
    thumbnails.forEach(function(el) {
      el.classList.remove('thumbnail-active');
    })

    lightbox.children[1].setAttribute('src', el.getAttribute('src'));
    el.classList.add('thumbnail-active');
  }
});




// function showNextPage() {

//   function displayOnThePage(numberOfElement) {
//     const imageBox = document.querySelectorAll('.image-box');
//     for (let i = 0; i < imageBox.length; i++) {
//       if (i <= numberOfElement) {
//         imageBox[i].classList.add('displayIt');
//       } else {
//         imageBox[i].classList.add('dontDisplayIt');
//       }
//     }
//   }
// }


// let begin = curPage * numberPerPage;
// let end = begin + numberPerPage;
// for (let i = 0; i < pageList.length; i++) {
//   pageList[i].classList.add("not-visible");
// }



// function loadList() {
//   let begin = ((currentPage - 1) * numberPerPage);
//   let end = begin + numberPerPage;
//   for (let i = 0; i < pageList.length; i++) {
//         pageList[i].classList.add("not-visible");
//     }
//   pageList = events.slice(begin, end);
//   drawList();
//   check();
//   }


// //next button
// const next = document.getElementById("next");
// console.log(next);
// function displayNext() {
// next.addEventListener('click', function() {
//     let nextSlide;
//     for(let i = 0; i < thumbnails.length; i++) {
//       if(thumbnails[i].classList.contains('thumbnail-active')) {
//         nextSlide = i + 1;
//       }
//     }
//     lightbox.children[1].setAttribute('src', pics[nextSlide].children[0].getAttribute('src'));
//   })
// }

// displayNext()





