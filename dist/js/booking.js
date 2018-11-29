const arrivalDate = document.getElementById('booking-arivalDate');
const departureDate = document.getElementById('booking-departureDate');
const numberOfNights = document.getElementById('numberOfNights');
const firstName = document.getElementById('booking-firstName');
const lastName = document.getElementById('booking-lastName');
const email = document.getElementById('booking-email');
const numberOfGuests = document.getElementById('booking-guests');
const phone = document.getElementById('booking-phone');
const roomId = document.getElementById('booking-roomId');
const bookingForm = document.getElementById('bookingForm');

const numberOfRooms = 30;
const roomRegistry = [];
for (let i = 0; i < numberOfRooms; i++) {
  roomRegistry[i] = [];
}


const bookingInfo = [];

const oneDay = 24 * 60 * 60 * 1000;
const submitButton = document.getElementById('booking-submitButton');

function generateId() {
  const timestamp = (+new Date()).toString();
  const parts = timestamp.split('').reverse();
  let id = '';

  function getRandomInt() {
    return Math.floor(Math.random() * 8);
  }

  for (let i = 0; i < 8; ++i) {
    let index = getRandomInt();
    id += parts[index];
  }

  return id;
}


function getBookingInfo(event) {
  event.preventDefault();
  const checkIn = Date.parse(arrivalDate.value);
  const checkOut = Date.parse(departureDate.value);
  numberOfNights.value = Math.round(Math.abs((checkOut - checkIn) / (oneDay)));
  const bookingId = generateId();


  function getDates(startDate, endDate) {
    const dates = [];
    let currentDate = startDate;
    function addDays(days) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }
    while (currentDate < endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  }
  // Usage
  const dates = getDates(new Date(arrivalDate.value), new Date(departureDate.value));
  roomRegistry[roomId.value].push(...dates);

  console.log(roomRegistry);

  bookingInfo.push({
    roomId: roomId.value,
    firstName: firstName.value,
    lastName: lastName.value,
    arrivalDate: arrivalDate.value,
    departureDate: departureDate.value,
    numberOfNights: numberOfNights.value,
    numberOfGuests: numberOfGuests.value,
    email: email.value,
    phone: phone.value,
    bookingId: bookingId,
    dates: dates,
  });

  firstName.value = '';
  lastName.value = '';
  arrivalDate.value = '';
  departureDate.value = '';
  numberOfNights.value = '';
  email.value = '';
  phone.value = '';

  localStorage.setItem('bookings', JSON.stringify(bookingInfo));

  console.log('Congrationlations! Your Booking Number is ' + bookingId)
}

submitButton.addEventListener('click', getBookingInfo);


const checkInDates = [];
const checkOutDates = [];
const fullDayDates = [];



// Checking the booking inforomation by booking number and last name

const checkBookingNumber = document.getElementById('checkBooking-number');
const checkLastName = document.getElementById('checkBooking-lastName');
const localStorageBookings = JSON.parse(localStorage.getItem('bookings'));

const checkBookingButton = document.getElementById('checkBooking-submitButton');
let storedBookingInfo = localStorageBookings.filter(obj => obj.bookingId === checkBookingNumber.value);

console.log(storedBookingInfo);

function checkBooking(event) {
  event.preventDefault();
  if (checkLastName.value === storedBookingInfo[0].lastName) {
    // console.log('Booking info: ...');
    renderBookingInfo(storedBookingInfo[0]);
  } else {
    console.log('Booking info is not found');
  }
}

checkBookingButton.addEventListener('click', checkBooking);


// Displaying boooking information from local storage

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



// Returns an array of dates between the two date
// function getDates(startDate, endDate) {
//   const dates = [];
//   let currentDate = startDate;
//   function addDays(days) {
//     const date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
//   }
//   while (currentDate <= endDate) {
//     dates.push(currentDate);
//     currentDate = addDays.call(currentDate, 1);
//   }
//   return dates;
// }
// // Usage
// const dates = getDates(new Date(2013, 10, 22), new Date(2013, 11, 25));

