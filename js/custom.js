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


// this function will have validators
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
    }

  }
  // END of Next page function

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
    }
  }
  // END of Skip page function

// START of Counter Code ---------------------------------------------------
// Night Counter -----------------------------------------------------------
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
// Night Counter -----------------------------------------------------------

// People Counter ----------------------------------------------------------
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
// People Counter ----------------------------------------------------------
// END of Counter Code -----------------------------------------------------

// // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // //

// START of Map Page Functions --------------------------------------------
  var filter = document.querySelector('#filterIcon');
  var backArrow = document.querySelector('#backIcon');
  var filterExit = document.querySelector('#filterExit');
  var filterCont = document.querySelector('.filter-container');
  var accCard = document.querySelector('.acc-card');
  var accInfo = document.querySelector('.acc-info');
  var bookBtn = document.querySelector('#bookBtn');
  accInfo.style.display = 'none';
  backArrow.style.display = 'none';
  filterExit.style.display = 'none';
  filterExit.addEventListener('click', hideFilter, false);
  accCard.addEventListener('click', cardClicked, false);
  filter.addEventListener('click', showFilter, false);
  backArrow.addEventListener('click', collapseCard, false);
  bookBtn.addEventListener('click', showBookingSumm, false);

  var minPriceInput = document.querySelector('.min-price');
  var maxPriceInput = document.querySelector('.max-price');
  userPreference.people = peopleCounter;
  maxPriceInput.value = userPreference.maxPrice;
  console.log(maxPriceInput.attributes.value);

  function cardClicked(){
    accCard.classList.add('card-expand');
    accCard.classList.remove('card-collapse');
    filter.style.display = 'none';
    backArrow.style.display = 'block';
    accInfo.style.display = 'block';

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
  // END of Map Page Functions --------------------------------------------
}());
// END OF CODE
