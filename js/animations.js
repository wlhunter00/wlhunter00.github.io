$(document).ready(function() {
  // Navbar drop down
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('#covid-link').attr('href', 'https://testflight.apple.com/join/uNPRlb1W');
  }
});