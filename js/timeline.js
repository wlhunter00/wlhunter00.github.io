$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 765) {
    $(".timeline-content")
      .removeClass("js--fadeInLeft")
      .removeClass("js--fadeInRight");
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});

$(window).resize(function () {
  var viewportWidth = $(window).width();
  if (viewportWidth < 765) {
    $(".timeline").removeClass("is-centered");
  } else {
    $(".timeline").addClass("is-centered");
  }
});

$(document).ready(function () {
  var viewportWidth = $(window).width();
  if (viewportWidth < 765) {
    $(".timeline").removeClass("is-centered");
  } else {
    $(".timeline").addClass("is-centered");
  }
});
