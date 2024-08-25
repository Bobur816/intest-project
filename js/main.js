$(window).on("load", () => {
  // ______________________________header__scroll_________________________________
  let rootFont = parseInt($(":root").css("font-size"));
  let scroll = $(window).scrollTop();
  scroll > rootFont * 2
    ? $(".header").addClass("header__scrolled")
    : $(".header").removeClass("header__scrolled");

  $(document).on("scroll", function () {
    let rootFont = parseInt($(":root").css("font-size"));
    let scroll = $(window).scrollTop();
    scroll > rootFont * 2
      ? $(".header").addClass("header__scrolled")
      : $(".header").removeClass("header__scrolled");
  });

  // ______________________________info-body show-toggler________________________________

  $(".product__info__body__toggler").on("click", function () {
    $(".product__info__body").toggleClass("show-all");
    let currentText = $(this).text();

    if (currentText === "скрыть") {
      $(this).text("Читать полностьюскрыть ");
    } else {
      $(this).text("скрыть");
    }
  });

  // ______________________________.filter__item__toggler________________________________

  $(".filter__item__toggler").on("click", function (e) {
    if ($(this).parent().hasClass("active")) {
      $(this).parents(".filter__item").find(".filter__item__body").slideUp(400);
      $(this).parent().removeClass("active");
    } else {
      $(this)
        .parents(".filter__item")
        .find(".filter__item__body")
        .slideDown(400);
      $(this).parent().addClass("active");
    }
  });

  // ______________________________info-body changer________________________________

  $(".product__info__head").on("click", function (e) {
    let index = Array.from($(".product__info__head")).indexOf(e.target);
    $(".product__info__head").removeClass("active");
    $(this).addClass("active");
    $(".product__info__body").hide();

    let willOpen = Array.from($(".product__info__body"))[index];
    $(willOpen).show();
  });

  // ______________________________dealership_________________________________
  $(".dealership__open").on("click", function () {
    $(".dealership").fadeIn(300);
  });

  $(".dealership__close").on("click", function () {
    $(".dealership").fadeIn(300);
  });

  $(".dealership").click((e) => {
    let div = $(".dealership__wrapper");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".dealership").fadeOut(400);

      setTimeout(() => {
        $(".dealership__form-item").val("");
      }, 700);
    }
  });

  // ______________________________installments_________________________________
  $(".installments__open").on("click", function () {
    $(".installments").fadeIn(300);
  });

  $(".installments__close").on("click", function () {
    $(".installments").fadeOut(300);
  });

  $(".installments").click((e) => {
    let div = $(".installments__wrapper");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".installments").fadeOut(400);

      setTimeout(() => {
        $(".installments__form-item").val("");
      }, 700);
    }
  });

  // ______________________________installments__card_________________________________
  $(".installments__card").on("click", function () {
    $(".installments__card").removeClass("active");
    $(this).addClass("active");
  });

  // ______________________________cart__btn_________________________________
  $(".card__cart-btn").on("click", function () {
    $(this).toggleClass("active");
  });

  // ______________________________phone-format_________________________________
  $(".phone-format").inputmask({
    mask: "+998 (99) 999-99-99",
  });
});
