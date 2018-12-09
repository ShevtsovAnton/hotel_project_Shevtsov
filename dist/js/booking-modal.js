const bookingModal = document.getElementById('myModal');
const closeButton = document.getElementsByClassName("close")[0];
const bookingSuccess = document.getElementById('bookingSuccess');
const bookingInfo = document.getElementById('displayBookingInfo');
 


function clearModal(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }


closeButton.onclick = function() {
    bookingModal.style.display = "none";
    body.classList.remove('modal-open');
    clearModal(bookingSuccess);
    clearModal(bookingInfo);
}
window.onclick = function(event) {
    if (event.target == bookingModal) {
        bookingModal.style.display = "none";
        body.classList.remove('modal-open');
    }
}


//BOOK NOW event
const bookNowButtons = document.getElementsByClassName("bookNowButton");
const body = document.getElementsByTagName("body")[0];
for (let i = 0; i < bookNowButtons.length ; i++) {
    bookNowButtons[i].addEventListener("click", 
    function (event) {
      event.preventDefault();
    //   document.getElementById("userInfo").innerHTML = "";
      bookingModal.style.display = "block";
      body.classList.add('modal-open');
    //   createUserInfo(users[userAnchors[i].getAttribute('data-userId') - 1]);
      }, 
    false);
}