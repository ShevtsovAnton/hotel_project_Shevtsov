const bookingModule = (function () {
  
  //cache dome
  const arrivalDate = document.getElementById('booking-arivalDate');
  const departureDate = document.getElementById('booking-departureDate');
  const fullName = document.getElementById('booking-fullName');
  const email = document.getElementById('booking-email');
  const numberOfGuests = document.getElementById('booking-guests');
  const phone = document.getElementById('booking-phone');
  const roomType = document.getElementById('booking__roomType');
  const bookingForm = document.getElementById('bookingForm');
  const submitButton = document.getElementById('booking-submitButton');


  //data
  const numberOfRooms = 3;
  const oneDay = 24 * 60 * 60 * 1000;

  //functions
  function generateBookingId() {
    let timestamp = (+new Date()).toString();
    let parts = timestamp.split('').reverse();
    let id = '';

    for (let i = 0; i < 8; ++i) {
      let index = Math.floor(Math.random() * 8);
      id += parts[index];
    }
  
    return id;

  }

  function setToNextDay(increment) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + increment);
    return date;
  }


  function getIndividualDates(startDate, endDate) {
    const dates = [];
    let currentDate = startDate;
    while (currentDate < endDate) {
      dates.push(currentDate);
      currentDate = setToNextDay.call(currentDate, 1);
    }

    return dates;

  }

  
  function addBookingInfoToArray(bookingId, dates) {
    const newEntry = {
      roomType: roomType.value,
      fullName: fullName.value,
      arrivalDate: arrivalDate.value,
      departureDate: departureDate.value,
      numberOfGuests: numberOfGuests.value,
      email: email.value,
      phone: phone.value,
      bookingId: bookingId,
      dates: dates,
    }
    return newEntry

  }

  function saveBookingInfoToLocalStorage(array) {
    const storedBookings = JSON.parse(localStorage.getItem('bookings'));
    if (storedBookings) {
      storedBookings.push(array[0]);
      localStorage.setItem('bookings', JSON.stringify(storedBookings));
    } else {
      localStorage.setItem('bookings', JSON.stringify(array));
    }
    console.log('Congrationlations! Your Booking Number is ' )
  }

  function alertSuccess(bookingId) {
    let bookingSuccess = document.getElementById('bookingSuccess');
    let successMessage = document.createElement('h4');
    successMessage.appendChild(document.createTextNode(`Congratulations! Your booking number is: ${bookingId}`));
    bookingSuccess.appendChild(successMessage);
    submitButton.disabled = true;
  }

  function clearFormFields() {
    fullName.value = '';
    arrivalDate.value = '';
    departureDate.value = '';
    email.value = '';
    phone.value = '';
  }

  function clearModal(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }


  function createBooking(event) {
    event.preventDefault();
    const bookingInfo = [];
    let bookingId = generateBookingId();
    let dates = getIndividualDates(new Date(arrivalDate.value), new Date(departureDate.value));
    bookingInfo.push(addBookingInfoToArray(bookingId, dates));
    saveBookingInfoToLocalStorage(bookingInfo);
    alertSuccess(bookingId);
    clearFormFields()
  }


  //init 
  function init() {
    submitButton.addEventListener('click', createBooking);
  }


  return {

    init: init,

  }

}())

bookingModule.init();



const checkBookingModule = (function () {


  //Cache Dome
  const bookingNumberField = document.getElementById('checkBooking-number');
  const bookingEmailField = document.getElementById('checkBooking-email');
  const storedBookings = JSON.parse(localStorage.getItem('bookings'));
  const submitButton = document.getElementById('checkBooking-submitButton');
  const modalGeneratedInfo = document.getElementById('displayBookingInfo');


  function checkBooking(event) {
    event.preventDefault();
    const storedBookings = JSON.parse(localStorage.getItem('bookings'));
    clearModal(modalGeneratedInfo);
    let storedBookingInfo = storedBookings.filter( element => element.bookingId === bookingNumberField.value);
    if (storedBookingInfo.length === 0) {
        renderError();
        return;
    }
    if (bookingEmailField.value === storedBookingInfo[0].email) {
      renderBookingInfo(storedBookingInfo[0]);
    } else {
      renderError();
    }
  }

  //FUNCTION CREATE USER INFO MODAL
  function renderError() {
    const result = document.getElementById('displayBookingInfo');
    let title = document.createElement("h3");
    title.setAttribute("class", "booking-error");
    title.appendChild(document.createTextNode("Nothing was found. Check provided information."));
    result.appendChild(title);
  }

  function renderBookingInfo(booking) {
    const result = document.getElementById('displayBookingInfo');
    while (result.firstChild) {
      result.removeChild(result.firstChild);
      }

    let title = document.createElement("h3");
    title.appendChild(document.createTextNode("Your Booking Information:"));
    result.appendChild(title);

    const keys = Object.keys(booking);
    keys.forEach(function (key) {
      if (key === 'dates') {
        return 
      };
      let container = document.createElement("div");
      container.setAttribute("class", "bookingInfo-line__container");
      
      let keySpan = document.createElement("span");
      keySpan.setAttribute("class", "bookingInfo__key");
      keySpan.appendChild(document.createTextNode(key + ": "));
      container.appendChild(keySpan);

      let propertySpan = document.createElement("span");
      propertySpan.setAttribute("class", "bookingInfo__property");
      propertySpan.appendChild(document.createTextNode(booking[key]));
      container.appendChild(propertySpan);

      result.appendChild(container);

      return result;

    })
}

    //init 
    function init() {
      submitButton.addEventListener('click', checkBooking);
    }


  return {

    init: init,

  }

})()

checkBookingModule.init();