$(window).on("load", () => {
  function updatePagination(swiper) {
    const currentSlide = swiper.realIndex + 1;
    const totalSlides = swiper.slides.length / swiper.params.slidesPerView;
    document.querySelector(
      ".head__carousel-num"
    ).innerHTML = `<span class="current">${currentSlide}</span>/<span class="total">${totalSlides}</span>`;
  }

  const head = new Swiper(".carousel__head", {
    // Optional parameters
    loop: true,

    on: {
      init: function () {
        updatePagination(this);
      },
      slideChange: function () {
        updatePagination(this);
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".head__carousel-next",
      prevEl: ".head__carousel-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  const partners = new Swiper(".carousel__partners", {
    // Optional parameters
    loop: true,

    breakpoints: {
      "@0.00": {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },

      "@0.50": {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      "@0.75": {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      "@1": {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  const completed = new Swiper(".carousel__completed", {
    // Optional parameters
    // loop: true,

    spaceBetween: 10,

    navigation: {
      nextEl: ".carousel__completed-next",
      prevEl: ".carousel__completed-prev",
    },

    // breakpoints: {
    //   "@0.00": {
    //     slidesPerView: 1,
    //   },
    //   "@0.75": {
    //     slidesPerView: 2,
    //   },
    //   "@1.00": {
    //     slidesPerView: 3,
    //   },
    //   "@1.50": {
    //     slidesPerView: 4.5,
    //   },
    // },
  });

  const productSingle = new Swiper(".carousel__product-single", {
    // Optional parameters
    // loop: true,

    navigation: {
      nextEl: ".product-single-next",
      prevEl: ".product-single-prev",
    },

    // breakpoints: {
    //   "@0.00": {
    //     slidesPerView: 1,
    //   },
    //   "@0.75": {
    //     slidesPerView: 2,
    //   },
    //   "@1.00": {
    //     slidesPerView: 3,
    //   },
    //   "@1.50": {
    //     slidesPerView: 4.5,
    //   },
    // },
  });

  const similarProducts = new Swiper(".carousel__similar", {
    // Optional parameters
    loop: true,
    spaceBetween: 20,

    navigation: {
      nextEl: ".similar-next",
      prevEl: ".similar-prev",
    },

    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
      "@1.50": {
        slidesPerView: 5,
      },
    },
  });

  const singleWork = new Swiper(".carousel__single-work", {
    // Optional parameters
    loop: true,

    navigation: {
      nextEl: ".single-next",
      prevEl: ".single-prev",
    },
  });

  const anotherWorks = new Swiper(".carousel__another-works", {
    // Optional parameters
    loop: true,
    spaceBetween: 20,

    navigation: {
      nextEl: ".another-works-next",
      prevEl: ".another-works-prev",
    },

    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
      "@1.50": {
        slidesPerView: 4,
      },
    },
  });

  const newsProducts = new Swiper(".carousel__new-products", {
    // Optional parameters
    loop: true,
    spaceBetween: 20,

    navigation: {
      nextEl: ".new-products-next",
      prevEl: ".new-products-prev",
    },

    breakpoints: {
      "@0.00": {
        slidesPerView: 1.5,
      },

      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
      "@1.50": {
        slidesPerView: 4,
      },
    },
  });
});
