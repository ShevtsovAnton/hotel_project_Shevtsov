const carouselSection = document.getElementById('carouselSection');
const accomodationsSection = document.getElementById('accomodationsSection');
const restaurantsSection = document.getElementById('restaurantsSection');
const servicesSection = document.getElementById('servicesSection');
const specialOffersSection = document.getElementById('specialOffersSection');
const navItems = document.querySelectorAll('.nav-item__container');
const accomodationsLink = document.querySelector(".main-nav__accomodations-link");
const restaurantsLink = document.querySelector(".main-nav__reataurants-link");
const servicesLink = document.querySelector(".main-nav__services-link");
const offersLink = document.querySelector(".main-nav__offers-link");
const homeLinks = document.querySelectorAll(".breadcrumbs__home-link");
const additionalInfo = document.querySelector(".additional-info");
const hotelInfo = document.querySelector(".hotel-info");

function hideHomePageSections() {
    if (!(carouselSection.classList.contains('hidden'))) {
        carouselSection.classList.add('hidden');
        additionalInfo.classList.add('hidden');
        hotelInfo.classList.add('hidden');
    } 
} 


function removeHiddenClass(element) {
    for (i = 0; i < navItems.length; i++) {
        if (navItems[i]) {
            navItems[i].classList.add('hidden');
        }
    }
    element.classList.remove('hidden');
}

function displayMenuSection(event, element) {
    event.preventDefault();
    hideHomePageSections();
    removeHiddenClass(element);
}

accomodationsLink.addEventListener('click', function(ev) {
    displayMenuSection(ev, accomodationsSection);
})

restaurantsLink.addEventListener('click', function(ev) {
    displayMenuSection(ev, restaurantsSection);
})

servicesLink.addEventListener('click', function(ev) {
    displayMenuSection(ev, servicesSection);
})

offersLink.addEventListener('click', function(ev) {
    displayMenuSection(ev, specialOffersSection);
});

//home link in breadcrumbs
for (i = 0; i < homeLinks.length; i++) {
    homeLinks[i].addEventListener('click', function(ev) {
        ev.preventDefault();
        for (i = 0; i < navItems.length; i++) {
            if (!(navItems[i].classList.contains('hidden'))) {
                navItems[i].classList.add('hidden');
            }
            if (carouselSection.classList.contains('hidden')) {
                carouselSection.classList.remove('hidden');
            }
            if (additionalInfo.classList.contains('hidden')) {
                additionalInfo.classList.remove('hidden');
            }
            if (hotelInfo.classList.contains('hidden')) {
                hotelInfo.classList.remove('hidden');
            }
        }
        window.scrollTo(0, 0);
    })
}


    





