const bookingModule = (function () {
  
  //cache dome
  const arrivalDate = document.getElementById('booking-arivalDate');
  const departureDate = document.getElementById('booking-departureDate');
  // const numberOfNights = document.getElementById('numberOfNights');
  const fullName = document.getElementById('booking-fullName');
  const email = document.getElementById('booking-email');
  const numberOfGuests = document.getElementById('booking-guests');
  const phone = document.getElementById('booking-phone');
  const roomType = document.getElementById('booking__roomType');
  const bookingForm = document.getElementById('bookingForm');
  const submitButton = document.getElementById('booking-submitButton');


  //data
  const numberOfRooms = 3;
  const roomRegistry = createEmptyArray();
  // const bookingInfo = [];
  const oneDay = 24 * 60 * 60 * 1000;

  //functions
  function createEmptyArray() {
    let array = [];
    for (let i = 0; i < numberOfRooms; i++) {
      array[i] = [];
    }
    return array
  }

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
      // numberOfNights: numberOfNights.value,
      numberOfGuests: numberOfGuests.value,
      email: email.value,
      phone: phone.value,
      bookingId: bookingId,
      dates: dates,
    }
    return newEntry

  }


  function calculateNumberOfNights() {
    const checkIn = Date.parse(arrivalDate.value);
    const checkOut = Date.parse(departureDate.value);
    numberOfNights.value = Math.round(Math.abs((checkOut - checkIn) / (oneDay)));
  }


  function addBookingDatesToRoomRegistry(array) {
    roomRegistry[roomType.value].push(...array);
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


  function clearFormFields() {
    fullName.value = '';
    arrivalDate.value = '';
    departureDate.value = '';
    numberOfNights.value = '';
    email.value = '';
    phone.value = '';
  }


  function createBooking(event) {
    event.preventDefault();
    const bookingInfo = [];
    let bookingId = generateBookingId();
    let dates = getIndividualDates(new Date(arrivalDate.value), new Date(departureDate.value));
    addBookingDatesToRoomRegistry(dates);
    bookingInfo.push(addBookingInfoToArray(bookingId, dates));
    saveBookingInfoToLocalStorage(bookingInfo);
    // clearFormFields()
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
  console.log('storedBookings='+storedBookings[0]);
  const submitButton = document.getElementById('checkBooking-submitButton');


  function checkBooking(event) {
    event.preventDefault();
    let storedBookingInfo = storedBookings.filter( element => (element.bookingId === bookingNumberField.value));
    if (bookingEmailField.value === storedBookingInfo[0].email) {
      console.log('Booking info: ...');
      renderBookingInfo(storedBookingInfo[0]);
    } else {
      console.log('Booking info is not found');
    }
  }

  //FUNCTION CREATE USER INFO MODAL

  function renderBookingInfo(booking) {
  const result = document.getElementById('displayBookingInfo');
  const keys = Object.keys(booking);
  keys.forEach(function (key) {
    // if ( key === 'id') {
    //   return;
    // }
    // if (typeof(booking[key]) === 'object') {
    //     let span = document.createElement("span");
    //     span.setAttribute('class', 'userInfo__'+key);
    //     span.appendChild(document.createTextNode(key + ":"));
    //     result.appendChild(span);

    //     createUserInfo(booking[key]);
    //     }
    // else {
    let span = document.createElement("span");
    span.setAttribute("class", "bookingInfo__key");
    span.appendChild(document.createTextNode(key + ": " + booking[key]));
    result.appendChild(span);
    // }

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