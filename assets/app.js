$(document).ready(function (){

  // Event Handler to take user to about section upon clicking on navbar
  // $("#aboutButton").click(function (){
  //     $('html, body').animate({
  //         scrollTop: $("#aboutSectionHeader").offset().top
  //     }, 500);
  // });

  // // Event Handler to take user to portfolio section upon clicking on navbar
  // $("#portfolioButton").click(function (){
  //     $('html, body').animate({
  //         scrollTop: $("#portfolioSectionHeader").offset().top
  //     }, 500);
  // });

  // // Event Handler to take user to contact section upon clicking on navbar
  // $("#contactButton").click(function (){
  //     $('html, body').animate({
  //         scrollTop: $("#contactSectionHeader").offset().top
  //     }, 500);
  // });

//   (function($) {          
//     $(document).ready(function(){                    
//         $(window).scroll(function(){                          
//             if ($(this).scrollTop() > 200) {
//                 $('.navbar').fadeIn(500);
//             } else {
//                 $('.navbar').fadeOut(500);
//             }
//         });
//     });
// })(jQuery);


// Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();
    
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
    
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('header').removeClass('navbar', 'navbar-nav', 'nav-link').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-up').addClass('navbar', 'navbar-nav', 'nav-link');
//         }
//     }
    
//     lastScrollTop = st;
// }


// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//  var currentScrollPos = window.pageYOffset;
//  if (prevScrollpos > currentScrollPos) {
//    document.getElementById("whiteBar").style.top = "0";
//  } else {
//    document.getElementById("whiteBar").style.top = "-68px";
//  }
//  prevScrollpos = currentScrollPos;
// }


});