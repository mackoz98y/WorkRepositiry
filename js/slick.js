$(document).ready(function () {
    $('.services__cards').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        mobileFirst: true,
        responsive:[
            {
              breakpoint:768,
              settings:{
                slidesToShow: 2
              }
            }
            ,{
              breakpoint:1200,
              settings:{
                slidesToShow:3,
                infinite:false
              }
            }
          ]

    });
})