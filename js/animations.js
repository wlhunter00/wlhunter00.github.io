$(document).ready(function() {
  // Navbar drop down
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  if (isMobile.iOS()) {
    $('a#covid').attr('href', 'https://testflight.apple.com/join/uNPRlb1W');
  }
});