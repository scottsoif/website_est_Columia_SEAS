/**
 * Custom Script by Wired Dots (https://wireddots.com)
 * Copyright 2018
 */
$(function () {
  // init feather icons
  feather.replace();

  // init tooltip & popovers
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  //page scroll
  $("a.page-scroll").bind("click", function (event) {
    console.log("hi");

    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1000
      );
    event.preventDefault();
  });

  //toggle scroll menu
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //adjust menu background
    if (scroll >= 100) {
      $(".sticky-navigation")
        .removeClass("navbar-dark")
        .addClass("navbar-light")
        .addClass("bg-white")
        .addClass("shadow-bottom");
      $(".btn-navbar")
        .removeClass("btn-outline-secondary")
        .addClass("btn-primary");
    } else {
      $(".sticky-navigation")
        .removeClass("navbar-light")
        .removeClass("bg-white")
        .addClass("navbar-dark")
        .removeClass("shadow-bottom");
      $(".btn-navbar")
        .removeClass("btn-primary")
        .addClass("btn-outline-secondary");
    }

    // adjust scroll to top
    if (scroll >= 600) {
      $(".scroll-top").addClass("active");
    } else {
      $(".scroll-top").removeClass("active");
    }
    return false;
  });

  // slick slider
  $(".slick-reviews").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
  });

  // scroll top top
  $(".scroll-top").click(function () {
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // hide/show dropdown
  $(".toggle-drp-dwn").click(function () {
    var x = document.getElementById("crowedIt-demo");
    if (x.innerText.indexOf("SEE DEMO") > -1) {
      x.innerText = "Hide Demo";
    } else {
      x.innerText = "See Demo";
    }
    $(".drp-dwn").toggle();
  });

  var $iframe = $("#if1");
  if ($iframe.data("src")) {
    // only do it once per iframe
    $iframe.prop("src", $iframe.data("src")).data("src", false);
  }
  var $iframe = $("#if2");
  if ($iframe.data("src")) {
    // only do it once per iframe
    $iframe.prop("src", $iframe.data("src")).data("src", false);
  }
  var $iframe = $("#if3");
  if ($iframe.data("src")) {
    // only do it once per iframe
    $iframe.prop("src", $iframe.data("src")).data("src", false);
  }
  var $iframe = $("#if4");
  if ($iframe.data("src")) {
    // only do it once per iframe
    $iframe.prop("src", $iframe.data("src")).data("src", false);
  }
});

// speed improvements - only load gif when dropdown clicked
function loadGIF() {
  document.getElementById("gif1").src = "demo_GIFs/CrowdIt_Tap_marker.gif";
  document.getElementById("gif2").src = "demo_GIFs/CrowdIt_Place_Search.gif";
  document.getElementById("gif3").src =
    "demo_GIFs/CrowdIt_BackgroundLocationBtn.gif";
}

// speed improvements - only load gif when dropdown clicked
function loadImages() {
  document.getElementById("pic1").src = "img/robot/pic2.png";
  document.getElementById("pic2").src = "img/robot/pic1.png";
  document.getElementById("pic3").src = "img/robot/pic6.png";
  document.getElementById("pic4").src = "img/robot/pic7.png";
}

// function submitToAPI(form) {
//   var data = JSON.stringify($(form).serializeArray()); //  <-----------

//   console.log(data);
//   return false;
// }

function submitToAPI(e) {
  e.preventDefault();

  var name = $("#name-input").val();
  var email = $("#email-input").val();
  var body = $("#body-input").val();
  var data = {
    name: name,
    email: email,
    body: body,
  };

  $.ajax({
    method: "POST",
    url: "https://bvx9uta0c3.execute-api.us-east-1.amazonaws.com/production/submit",
    dataType: "json",
    crossDomain: "true",
    headers: {
      "Content-Type": "application/json charset=utf-8",
    },
    data: JSON.stringify(data),
    success: function () {
      // clear form and show a success message
      $("#form-status").html(
        '<h2 class="display-5 about-me-title">Thanks for reaching out!</h2>'
      );
      // alert("Successfull");
      // document.getElementById("contact-form").reset();
      // location.reload();
    },
    error: function () {
      // show an error message
      alert("UnSuccessfull");
    },
  });
}

//odemeter random count for videos
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
