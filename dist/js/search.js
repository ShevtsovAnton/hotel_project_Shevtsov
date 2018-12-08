const searchRooms = (function() {
    //cache Dome
    const searchInputField = document.getElementById('searchInput');
   

    //functions
    function myFunction() {
        
        const filter = searchInputField.value.toUpperCase();
        const roomCardsContainer = document.querySelector(".nav-item__body.room-cards");
        const roomCards = roomCardsContainer.getElementsByClassName("room-card__container");
    
        for (let i = 0; i < roomCards.length; i++) {
            const paragraph = roomCards[i].getElementsByTagName("p")[0];
            const title = roomCards[i].getElementsByTagName("h3")[0];
            paragraphTxt = paragraph.textContent || paragraph.innerText;
            titleTxt = title.textContent || title.innerText;
            if ((paragraphTxt.toUpperCase().indexOf(filter) > -1) || (titleTxt.toUpperCase().indexOf(filter) > -1)){
                roomCards[i].style.display = "";
            } else {
                roomCards[i].style.display = "none";
            }
        }
    }

    //eventListeners
    function setEventListeners() {
        searchInputField.addEventListener('keyup', myFunction);
    }

    //public
    function init() {
        setEventListeners();
    }

    return {
        init: init,
    }
})()


searchRooms.init();



