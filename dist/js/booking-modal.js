const bookingModal = document.getElementById('myModal');
const closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function() {
    bookingModal.style.display = "none";
    body.classList.remove('modal-open');
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