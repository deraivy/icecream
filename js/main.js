$(".product-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

let slideIndex = 1;
showSlides(slideIndex);

// Automatic slideshow
let slideInterval = setInterval(function () {
  plusSlides(1);
}, 5000); // Change slide every 5 seconds (5000 milliseconds)

// Pause slideshow on hover
document
  .querySelector(".slideshow-container")
  .addEventListener("mouseenter", function () {
    clearInterval(slideInterval);
  });

// Resume slideshow on mouse leave
document
  .querySelector(".slideshow-container")
  .addEventListener("mouseleave", function () {
    slideInterval = setInterval(function () {
      plusSlides(1);
    }, 5000);
  });

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Modal Video
$(document).ready(function () {
  var $videoSrc;
  $(".btn-play").click(function () {
    $videoSrc = $(this).data("src");
    $("#videoModal").modal("show"); // Show the modal when the button is clicked
  });

  $("#videoModal").on("show.bs.modal", function (e) {
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  $("#videoModal").on("hide.bs.modal", function (e) {
    $("#video").attr("src", "");
  });
  // testimonial
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    items: 1,
  });
});
