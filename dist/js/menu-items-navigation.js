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
const contactsLink = document.querySelector(".main-nav__contacts-link");
const homeLinks = document.querySelectorAll(".main-nav__contacts-link");

function hideCarousel() {
    if (!(carouselSection.classList.contains('hidden'))) {
        carouselSection.classList.add('hidden');
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
    hideCarousel()
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
        }
    })
}


    





