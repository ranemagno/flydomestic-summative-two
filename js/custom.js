(function(){

  var infoPage = document.querySelector('.info-page');

  var userName = document.querySelector('#name');
  console.log(userName.type);

  var userEmail = document.querySelector('#email');
  console.log(userEmail.type);

  var userPhone = document.querySelector('#phoneNum');
  console.log(userPhone.type);

  var locationPage = document.querySelector('.location-page');
  var coromandelCard = document.querySelector('.coromandel-card');
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
  var pageNum = 0;

  coromandelCard.addEventListener('click', nextPage, false);
  btnNext.addEventListener('click', nextPage, false);
  btnSkip.addEventListener('click', skipPage, false);


// this function will have validators
  function nextPage() {
    if (pageNum === 0) {
      infoPage.style.display = 'none';
      locationPage.style.display = 'block';
      btnNext.style.display = 'none';
      pageNum = pageNum + 1;
      console.dir(userName);
      userDetails.fullName = userName.value;
      userDetails.email = userEmail.value;
      userDetails.phoneNum = userPhone.value;
      console.log(userDetails);
    }
    else if (pageNum === 1) {
      nightPage.style.display = 'block';
      locationPage.style.display = 'none';
      btnSkip.style.display = 'block';
      btnNext.style.display = 'block';
      pageNum = pageNum + 1;
    } else if (pageNum === 2) {
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


}());


// Pattern
  // var submitBtn = document.querySelector('#submit');
  // submitBtn.addEventListener('click', updateCard, false)











//  Splide node_modules/@splidejs i don't think I need this

// new Splide( '.splide' ).mount();
//
// // var elms = document.getElementsByClassName( 'splide' );
// // for ( var i = 0, len = elms.length; i < len; i++ ) {
// // 	new Splide( elms[ i ] ).mount();
// // }
//
//
// new Splide( '#splide', {
// 	type: 'slide',
//   width: '100vw',
//   height: '50vh',
//   arrows: 'false',
//   // pagination: false,
// 	// perPage: 3,
// } );
//
//
// var options = {
// 	// Padding left/right(top/bottom) will be 10px
// 	padding: 0,
//
// 	// Padding left/right(top/bottom) will be 1em.
// 	padding: 0,
// }
