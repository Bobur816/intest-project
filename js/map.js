$(window).on("load", () => {
  const countries = [
    {
      nameCode: "irak",
      name: "Ирак",
      yearsOfCooperation: 5,
      partnerCompanies: 133,
      quantityOfEquipment: 12000,
      imgUrl: "img/countries/country-img-1.png",
    },
    {
      nameCode: "afg",
      name: "Afganistan",
      yearsOfCooperation: 7,
      partnerCompanies: 153,
      quantityOfEquipment: 15400,
      imgUrl: "img/countries/country-img-1.png",
    },
    {
      nameCode: "oae",
      name: "Oae",
      yearsOfCooperation: 5,
      partnerCompanies: 133,
      quantityOfEquipment: 11500,
      imgUrl: "img/countries/country-img-1.png",
    },
    {
      nameCode: "armeny",
      name: "Armanistan",
      yearsOfCooperation: 7,
      partnerCompanies: 133,
      quantityOfEquipment: 14000,
      imgUrl: "img/countries/country-img-1.png",
    },
    {
      nameCode: "azerb",
      name: "Azerbajan",
      yearsOfCooperation: 5,
      partnerCompanies: 133,
      quantityOfEquipment: 12000,
      imgUrl: "img/countries/country-img-1.png",
    },
    {
      nameCode: "china",
      name: "Ирак",
      yearsOfCooperation: 5,
      partnerCompanies: 133,
      quantityOfEquipment: 12000,
      imgUrl: "img/countries/country-img-1.png",
    },
    {
      nameCode: "gruz",
      name: "Ирак",
      yearsOfCooperation: 5,
      partnerCompanies: 133,
      quantityOfEquipment: 12000,
      imgUrl: "img/countries/country-img-1.png",
    },
    {
      nameCode: "kaz",
      name: "Ирак",
      yearsOfCooperation: 5,
      partnerCompanies: 133,
      quantityOfEquipment: 12000,
      imgUrl: "img/countries/country-img-1.png",
    },
    {
      nameCode: "kg",
      name: "Ирак",
      yearsOfCooperation: 5,
      partnerCompanies: 133,
      quantityOfEquipment: 12000,
      imgUrl: "img/countries/country-img-1.png",
    },
    {
      nameCode: "taj",
      name: "Ирак",
      yearsOfCooperation: 5,
      partnerCompanies: 133,
      quantityOfEquipment: 12000,
      imgUrl: "img/countries/country-img-1.png",
    },
    {
      nameCode: "turk",
      name: "Ирак",
      yearsOfCooperation: 5,
      partnerCompanies: 133,
      quantityOfEquipment: 12000,
      imgUrl: "img/countries/country-img-1.png",
    },
    {
      nameCode: "mon",
      name: "Ирак",
      yearsOfCooperation: 5,
      partnerCompanies: 133,
      quantityOfEquipment: 12000,
      imgUrl: "img/countries/country-img-1.png",
    },
  ];

  // ______________________________country card change_________________________________

  function changeCard(nameCode) {
    const cardData = countries.find((el) => el.nameCode === nameCode);

    const {
      name,
      yearsOfCooperation,
      partnerCompanies,
      quantityOfEquipment,
      imgUrl,
    } = cardData;

    $(".map__card__img").attr("src", imgUrl);
    $(".map__card__info__head").text(name);
    $(".years-of-cooperation").text(yearsOfCooperation);
    $(".partner-companies").text(partnerCompanies);
    $(".quantity-of-equipment").text(quantityOfEquipment);
  }

  // ______________________________map_________________________________

  $(".clickable").on("click", function (e) {
    $(".clickable").removeClass("active");
    $(".stroke-hide").removeClass("active");
    $(this).addClass("active");
    let country = e.target.classList[1];
    changeCard(country);

    $(".stroke-hide").each(function () {
      if ($(this).hasClass(country)) {
        $(this).addClass("active");
      }
    });
  });
});
