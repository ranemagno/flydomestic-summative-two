(function(){
  var logo = document.querySelector('#logo');
  var infoPage = document.querySelector('.info-page');
  var userName = document.querySelector('#name');
  var userEmail = document.querySelector('#email');
  var userPhone = document.querySelector('#phoneNum');

  var locationPage = document.querySelector('.location-page');
  var coromandelCard = document.querySelector('.coromandel-card');
  coromandelCard.addEventListener('click', nextPage, false);
  var nightPage = document.querySelector('.night-page');
  var peoplePage = document.querySelector('.people-page');
  var mapPage = document.querySelector('.map-page');

  locationPage.style.display = 'none';
  nightPage.style.display = 'none';
  peoplePage.style.display = 'none';
  mapPage.style.display = 'none';

  var btnNext = document.querySelector('#next');
  var btnSkip = document.querySelector('#skip');
  btnSkip.style.display = 'none';
  btnNext.style.display = 'block';
  btnNext.addEventListener('click', nextPage, false);
  btnSkip.addEventListener('click', skipPage, false);
  var pageNum = 0;
  btnNext.style.display = 'none';

// START Parsley ---------------------------------------------------------------
// validating the info page inputs
  var $selector = $('#infoPage'),
      form = $selector.parsley();

  $('#infoPageBtn').click(function(){
    console.log('hello');
  });

  // Find the button element and if clicked validate
  $selector.find('#infoPageBtn').click(function () {
      form.validate();
      // console.log('not valid');
  });
  // Function triggers if all inputs are valid
  form.subscribe('parsley:form:success', function (e) {
    nextPage();
  });
// END Parsley -----------------------------------------------------------------

// START Page Functions --------------------------------------------------------
  function nextPage() {
    if (pageNum === 0) {
      locationPage.style.display = 'block';
      infoPage.style.display = 'none';
      btnNext.style.display = 'none';
      userDetails.fullName = userName.value;
      userDetails.email = userEmail.value;
      userDetails.phoneNum = userPhone.value;
      pageNum = pageNum + 1;
    }
    else if (pageNum === 1) {
      locationPage.style.display = 'none';
      nightPage.style.display = 'block';
      btnSkip.style.display = 'block';
      btnNext.style.display = 'block';
      pageNum = pageNum + 1;
    } else if (pageNum === 2) {
      nightPage.style.display = 'none';
      peoplePage.style.display = 'block';
      pageNum = pageNum + 1;
    } else {
      mapPage.style.display = 'block';
      logo.style.color = "rgb(38, 38, 38)";
      nightPage.style.display = 'none';
      peoplePage.style.display = 'none';
      btnNext.style.display = 'none';
      btnSkip.style.display = 'none';
      console.log(userPreference);
      // if input is 'this' only show these
      // hotel.style.visibility = "hidden";
      // map.removeLayer(hotel);
    }
  }
  // END of Next page function //


      // this function does not need validators
      // if skip results stay at default/min
  function skipPage() {
    if (pageNum === 0) {
      infoPage.style.display = 'none';
      nightPage.style.display = 'block';
      pageNum = pageNum + 1;
    } else if (pageNum === 1) {
      nightPage.style.display = 'none';
      peoplePage.style.display = 'block';
      pageNum = pageNum + 1;
    } else {
      nightPage.style.display = 'none';
      peoplePage.style.display = 'none';
      mapPage.style.display = 'block';
      btnNext.style.display = 'none';
      btnSkip.style.display = 'none';
      logo.style.color = "rgb(38, 38, 38)";
      console.log(userPreference);
    }
  }
  // END skip page function //

// END Page Change Functions ---------------------------------------------------


// START Counter Functions -----------------------------------------------------
  // START Night Counter //
  var nightBtnMinus = document.querySelector('.night-counter-minus');
  var nightBtnAdd = document.querySelector('.night-counter-add');
  var nightNumber = document.querySelector('.night-counter-number');
  var nightCounter = 1;
  nightBtnAdd.addEventListener('click', addToNight, false);
  nightBtnMinus.addEventListener('click', minusToNight, false);
  var nightInput = document.querySelector('.night-input');
  var peopleInput = document.querySelector('.people-input');

  function addToNight() {
    if (nightCounter < 15) {
      nightCounter = nightCounter + 1;
      nightNumber.textContent = nightCounter;
    } else {
      console.log('15 is max');
    }
    userPreference.nights = nightCounter;
    nightInput.attributes.value = nightCounter;
  }
  function minusToNight() {
    if (nightCounter > 1  ) {
      nightCounter = nightCounter - 1;
      nightNumber.textContent = nightCounter;
    } else {
      console.log('1 is min');
    }
    userPreference.nights = nightCounter;
    nightInput.attributes.value = nightCounter;
  }
  // END Night Counter //

  // START People Counter //
  var peopleBtnMinus = document.querySelector('.people-counter-minus');
  var peopleBtnAdd = document.querySelector('.people-counter-add');
  var peopleNumber = document.querySelector('.people-counter-number');
  var peopleCounter = 1;
  peopleBtnAdd.addEventListener('click', addToPeople, false);
  peopleBtnMinus.addEventListener('click', minusToPeople, false);
  function addToPeople() {
    if (peopleCounter < 4) {
      peopleCounter = peopleCounter + 1;
      peopleNumber.textContent = peopleCounter;
    } else {
      console.log('4 is max');
    }
    userPreference.people = peopleCounter;
    peopleInput.attributes.value = peopleCounter;
  }
  function minusToPeople() {
    if (peopleCounter > 1  ) {
      peopleCounter = peopleCounter - 1;
      peopleNumber.textContent = peopleCounter;
    } else {
      console.log('1 is min');
    }
    userPreference.people = peopleCounter;
    peopleInput.attributes.value = peopleCounter;
  }
  // END People Counter //
// END of Counter Code ---------------------------------------------------------

// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //

// START Map Page Functions ----------------------------------------------------
  var filter = document.querySelector('#filterIcon');
  var backArrow = document.querySelector('#backIcon');
  var filterExit = document.querySelector('#filterExit');
  var filterCont = document.querySelector('.filter-container');
  var accCard = document.querySelector('.acc-card');
  var accInfo = document.querySelector('.acc-info');
  var bookBtn = document.querySelector('#bookBtn');
  // accInfo.style.display = 'none';
  backArrow.style.display = 'none';
  filterExit.style.display = 'none';
  filterExit.addEventListener('click', hideFilter, false);
  accCard.addEventListener('click', cardClicked, false);
  filter.addEventListener('click', showFilter, false);
  backArrow.addEventListener('click', collapseCard, false);
  // bookBtn.addEventListener('click', showBookingSumm, false);

  var minPriceInput = document.querySelector('.min-price');
  var maxPriceInput = document.querySelector('.max-price');
  userPreference.people = peopleCounter;
  maxPriceInput.value = userPreference.maxPrice;
  // console.log(maxPriceInput.attributes.value);

  function cardClicked(){
    accCard.classList.add('card-expand');
    accCard.classList.remove('card-collapse');
    filter.style.display = 'none';
    backArrow.style.display = 'block';
    accInfo.style.display = 'block';
    if (filterCont.classList.contains('show-filter')){
      hideFilter();
      filter.style.display = 'none';
    }
  }
  function collapseCard(){
    accCard.classList.remove('card-expand');
    accCard.classList.add('card-collapse');
    filter.style.display = 'block';
    backArrow.style.display = 'none';
  }
  function showFilter() {
    filterCont.classList.add('show-filter');
    filterCont.classList.remove('hide-filter');
    filter.style.display = 'none';
    filterExit.style.display = 'block';
  }
  function hideFilter() {
    filterCont.classList.remove('show-filter');
    filterCont.classList.add('hide-filter');
    filter.style.display = 'block';
    filterExit.style.display = 'none';
  }
  function showBookingSumm() {
    console.log(userDetails);
    console.log(userPreference);
  }
  // END Map Page Functions ----------------------------------------------------

  var accInfoRating = document.querySelector('.acc-card-info-rating');
  var accInfoName = document.querySelector('.acc-card-info-name');
  var accInfoSumm = document.querySelector('.acc-card-info-summ');
  var accInfoPrice = document.querySelector('.acc-card-info-price');


  hostel.getElement().addEventListener('click', () => {
    updateCard(accommodationData.hostel.name, accommodationData.hostel.pricePerNight, accommodationData.hostel.starRating, accommodationData.hostel.summary);
  });
  hotel.getElement().addEventListener('click', () => {
    updateCard(accommodationData.hotel.name, accommodationData.hotel.pricePerNight, accommodationData.hotel.starRating, accommodationData.hotel.summary);
  });
  motel.getElement().addEventListener('click', () => {
    updateCard(accommodationData.motel.name, accommodationData.motel.pricePerNight, accommodationData.motel.starRating, accommodationData.motel.summary);
  });
  house.getElement().addEventListener('click', () => {
    updateCard(accommodationData.house.name, accommodationData.house.pricePerNight, accommodationData.house.starRating, accommodationData.house.summary);
  });

  function updateCard(name, price, rating, summary) {
    // console.log(name, price, rating, summary);
    accInfoName.textContent = name;
    accInfoPrice.textContent = price;
    accInfoSumm.textContent = summary;
    accInfoRating.textContent = rating;
    hotel._color = 'rgb(14, 170, 50)';
    console.dir(hotel);
  }

}());
// END OF CODE
