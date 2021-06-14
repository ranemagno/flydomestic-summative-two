(function(){
  var btnAdd = document.querySelector('#counterAdd');
  btnAdd.addEventListener('click', addToCounter, false);
  var btnMinus = document.querySelector('#counterMinus');
  btnMinus.addEventListener('click', minusToCounter, false);

  function addToCounter() {
    console.log('add');
  }
  function minusToCounter() {
    console.log('minus');
  }
}())


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
