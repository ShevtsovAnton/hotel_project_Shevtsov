const carouselSection = document.getElementById('carouselSection');
const accomodationsSection = document.getElementById('accomodationsSection');
const restaurantsSection = document.getElementById('restaurantsSection');
const servicesSection = document.getElementById('servicesSection');
const specialOffersSection = document.getElementById('specialOffersSection');
const navItems = document.querySelectorAll('.nav-item__container');
const servicesLinks = document.querySelectorAll(".main-nav__services-link");
const accomodationsLinks = document.querySelectorAll(".main-nav__accomodations-link");
const restaurantsLinks = document.querySelectorAll(".main-nav__reataurants-link");
const offersLinks = document.querySelectorAll(".main-nav__offers-link");
const burgerOpenButton = document.getElementById('burger-toggle');
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
    document.getElementById('burger-menu').setAttribute('aria-expanded', 'false');
    document.getElementById('burger-toggle').setAttribute('aria-expanded', 'false');
}


accomodationsLinks.forEach(function(el) {
    el.addEventListener('click', function(ev) {
    displayMenuSection(ev, accomodationsSection);
    });
})


restaurantsLinks.forEach(function(el) {
    el.addEventListener('click', function(ev) {
        displayMenuSection(ev, restaurantsSection);
    });
})


servicesLinks.forEach(function(el) {
    el.addEventListener('click', function(ev) {
        displayMenuSection(ev, servicesSection);
        
    })
});


offersLinks.forEach(function(el) {
    el.addEventListener('click', function(ev) {
    displayMenuSection(ev, specialOffersSection);
    })
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


    





