// Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener("DOMContentLoaded", () => {
  
  // Header START
    $('.hamburger').on('click', function(){

      if($(this).hasClass('is-active')) {
        $(this).removeClass('is-active')
        $('.header-mobile-wrap').slideUp(500)
      } else {
        $(this).addClass('is-active')
        $('.header-mobile-wrap').slideDown(500)
      }

      

    })
  // Header END
  
  // Banner START
  const bannerSwiper = new Swiper(".banner-swiper", {
    speed: 1000,
    spaceBetween: 0,
    autoHeight: true,
    navigation: {
      nextEl: ".banner-swiper .swiper-button-next",
      prevEl: ".banner-swiper .swiper-button-prev",
    },
    pagination: {
      el: ".banner-swiper .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  // Banner END

  // Services START
  $(".about-btn").magnificPopup({
    type: "inline",
    showCloseBtn: false,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
  });
  $(".services-btn").magnificPopup({
    type: "inline",
    showCloseBtn: false,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
  });
  $(".modal-form-close").on("click", function () {
    $.magnificPopup.close();
  });
  // Services END

  // Gallery START
  $(".gallery-wrap a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    callbacks: {
      beforeOpen: function () {
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
  });

  $(".gallery-btn a").on("click", function (event) {
    event.preventDefault();

    var galleryItem = $(".gallery-item");

    if ($(this).hasClass("is-active")) {
      $(this).removeClass("is-active");
      $(this).text("Показать Еще");
      galleryItem.each(function () {
        if ($(this).hasClass("is-active")) {
          $(this).removeClass("is-active");
          $(this).slideUp();
        }
      });
    } else {
      $(this).addClass("is-active");
      $(this).text("Скрыть");
      galleryItem.each(function () {
        if (!$(this).is(":visible")) {
          $(this).addClass("is-active");
          $(this).slideDown();
        }
      });
    }
  });
  // Gallery END

  // Reviews START
  const reviewsSwiper = new Swiper(".reviews-swiper", {
    speed: 1000,
    spaceBetween: 20,
    pagination: {
      el: ".reviews-swiper .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    }
  });
  // Reviews END
});
