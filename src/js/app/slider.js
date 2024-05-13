import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelectorAll("[data-slider]");
  slider.forEach((el) => {
    createSlider(el);
  });
});

const checkIsLooped = (el) => {
  if (el.getAttribute('data-looped')) {
    return false
  } else return el.querySelectorAll(".swiper-slide").length > 3;
}

function createSlider(el) {
  let swiper = Swiper;
  let init = false;
  const desktop = window.matchMedia("(min-width: 767px)");
  const mobile = window.matchMedia("(min-width: 0px) and (max-width: 766px)");
  const looped = checkIsLooped(el);

  const slidesQuantity = parseInt(el.getAttribute("data-slider-slides"), 10);
  const slidesQuantityTab = parseInt(el.getAttribute("data-slider-slides-tab"), 10);
  const slidesQuantityMob = parseInt(el.getAttribute("data-slider-slides-mob"), 10);
  const pagination = el.querySelector("[data-slider-pagination]") || null;
  const desktopOnly = !!el.hasAttribute("data-slider-desktop");
  const mobileOnly = !!el.hasAttribute("data-slider-mobile");


  function initSlider(el) {
    if (mobileOnly && mobile.matches) {
      if (!init) {
        init = true;
        swiper = callSlider(el);
      }
    } else if (mobileOnly && desktop.matches) {
      if (init) {
        swiper.destroy();
        init = false;
      }
    } else if (!desktopOnly || (desktopOnly && desktop.matches)) {
      if (!init) {
        init = true;
        swiper = callSlider(el);
      }
    } else if (desktopOnly && mobile.matches) {
      if (init) {
        swiper.destroy();
        init = false;
      }
    }
  }

  function callSlider(el) {
    return new Swiper(el.querySelector(".swiper"), {
      modules: [Navigation, Pagination],
      slidesPerView: slidesQuantity,
      spaceBetween: 30,
      effect: "fade",
      slideVisibleClass: "slider__slide--visible",
      watchSlidesProgress: true,
      loop: looped,
      autoHeight: false,
      pagination: {
        el: pagination,
        clickable: true,
        type: "bullets",
        bulletClass: "bullet",
        bulletActiveClass: "bullet--active"
      },
      navigation: {
        nextEl: el.querySelector("[data-slider-next]"),
        prevEl: el.querySelector("[data-slider-prev]")
      },
      breakpoints: {
        1200: {
          slidesPerView: slidesQuantity,
          spaceBetween: 20
        },
        768: {
          slidesPerView: slidesQuantityTab || 2,
          spaceBetween: 20
        },

        320: {
          slidesPerView: slidesQuantityMob || 1,
          spaceBetween: 15
        }
      }
    });
  }

  initSlider(el);
  window.addEventListener("resize", () => {
    initSlider(el);
  });
}
