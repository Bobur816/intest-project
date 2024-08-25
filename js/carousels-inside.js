$(window).on("load", () => {
  function updatePagination(swiper, num) {
    const currentSlide = swiper.realIndex + 1;
    const totalSlides = swiper.slides.length / swiper.params.slidesPerView;
    let items = Array.from(
      document.querySelectorAll(`.completed__item-left__carousel-num`)
    );

    items[
      num - 1
    ].innerHTML = `<span class="current">${currentSlide}</span>/<span class="total">${totalSlides}</span>`;
  }

  const completedChild1 = new Swiper(".carousel__completed-child_1", {
    // Optional parameters
    loop: true,

    on: {
      init: function () {
        updatePagination(this, 1);
      },
      slideChange: function () {
        updatePagination(this, 1);
      },
    },

    navigation: {
      nextEl: ".inner-next-1",
      prevEl: ".inner-prev-1",
    },
  });
  const completedChild2 = new Swiper(".carousel__completed-child_2", {
    // Optional parameters
    loop: true,

    on: {
      init: function () {
        updatePagination(this, 2);
      },
      slideChange: function () {
        updatePagination(this, 2);
      },
    },

    navigation: {
      nextEl: ".inner-next-2",
      prevEl: ".inner-prev-2",
    },
  });

  const completedChild3 = new Swiper(".carousel__completed-child_3", {
    // Optional parameters
    loop: true,

    on: {
      init: function () {
        updatePagination(this, 3);
      },
      slideChange: function () {
        updatePagination(this, 3);
      },
    },

    navigation: {
      nextEl: ".inner-next-3",
      prevEl: ".inner-prev-3",
    },
  });
});
