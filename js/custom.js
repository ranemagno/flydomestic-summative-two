(function(){

  var logo = document.querySelector('#logo');
  var filter = document.querySelector('#filterIcon');
  var backArrow = document.querySelector('#backIcon');
  backArrow.style.display = 'none';


  var infoPage = document.querySelector('.info-page');
  var userName = document.querySelector('#name');
  var userEmail = document.querySelector('#email');
  var userPhone = document.querySelector('#phoneNum');

  var locationPage = document.querySelector('.location-page');
  var coromandelCard = document.querySelector('.coromandel-card');
  var nightPage = document.querySelector('.night-page');
  var peoplePage = document.querySelector('.people-page');
  var mapPage = document.querySelector('.map-page');
  var accCard = document.querySelector('.acc-card');

  accCard.addEventListener('click', cardClicked, false);
  backArrow.addEventListener('click', collapseCard, false);

  locationPage.style.display = 'none';
  nightPage.style.display = 'none';
  peoplePage.style.display = 'none';
  mapPage.style.display = 'none';

  var btnNext = document.querySelector('#next');
  var btnSkip = document.querySelector('#skip');
  var pageNum = 0;
  btnSkip.style.display = 'none';
  btnNext.style.display = 'block';

  coromandelCard.addEventListener('click', nextPage, false);
  btnNext.addEventListener('click', nextPage, false);
  btnSkip.addEventListener('click', skipPage, false);


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
      console.dir(userName);
      console.log(userDetails);
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
      logo.style.color = "rgb(38, 38, 38)"
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
    }
  }
  // END of Skip page function

// Counter Code ------------------------------------------------------------
  var btnAdd = document.querySelector('#counterAdd');
  btnAdd.addEventListener('click', addToCounter, false);
  var btnMinus = document.querySelector('#counterMinus');
  btnMinus.addEventListener('click', minusToCounter, false);
  var counter = document.querySelector('#counterNumber');
  console.dir(counter.textContent);
  var nightInput = 1;

  function addToCounter() {
    if (nightInput < 15) {
      nightInput = nightInput + 1;
      counter.textContent = nightInput;
    } else {
      console.log('15 is max');
    }
  }
  // END of Add Function


  function minusToCounter() {
    if (nightInput > 1  ) {
      nightInput = nightInput - 1;
      counter.textContent = nightInput;
    } else {
      console.log('1 is min');
    }
  }
  // END of Minus Function
// END of Counter Code -----------------------------------------------------

// // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // //

// START of Map Page Functions --------------------------------------------
  function cardClicked(){
    console.dir(logo);
    accCard.classList.add('card-expand');
    accCard.classList.remove('card-collapse');
    filter.style.display = 'none';
    backArrow.style.display = 'block';
  }
  function collapseCard(){
    accCard.classList.remove('card-expand');
    accCard.classList.add('card-collapse');
    console.log('collapse');
    filter.style.display = 'block';
    backArrow.style.display = 'none';

  }
  // END of Map Page Functions --------------------------------------------

}());
// END OF CODE
