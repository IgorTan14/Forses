$(function(){
    $('.header__burger').on('click', function(){ 
        $('.burger__content').toggleClass('burger__content--active');

        $('.product-list__filter ').toggleClass('hidden');
        $('.main').toggleClass('off');
        $('.header__burger').toggleClass('header__burger--active');
      });

      $('.product-list__filter-img').on('click', function(){ 
        $('.filter__content').toggleClass('filter__content--active');
 
      });
      $('.filter__content-close').on('click', function(){ 
        $('.filter__content').toggleClass('filter__content--active');
      });

 $('.top__inner').slick({
     arrows: false,
     dots: true,
     // fade: true,
    //  autoplay: true,
    //  autoplaySpeed: 3000,
    //  slidesToShow: 3,
    //  slidesToScroll: 1,
     Infinite: true,
     responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
                 }
        },{
           breakpoint: 705,
           settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           arrows: false,
           nextArrow: '<button type="button" class="slick-arr--none"></button>',
           prevArrow: '<button type="button" class="slick-arr--none"></button>',
           }
        }
     ],
});
$('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    vertical: false,
    Infinite: true,
    arrows: false,
    dots: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
               }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
               }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
               }
      }]
});
$('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: true,
    dots: false,
    nextArrow: '<button type="button" class="slick-arr--right"><img src="images/icons/arr-right.png"></button>',
    prevArrow: '<button type="button" class="slick-arr--left"><img src="images/icons/arr-left.png"></button>',
})

$('.star').rateYo({
    starWidth: "20px",
    normalFill: '#D6D6D6',
    ratedFill: '#FFCC00',
    spacing: '10px',
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>'
 })



//  $('.header__burger ').on('click', function(e){
//     e.preventDefault();
//     $('.burger__content').toggleClass('open');
// });


// $('.search-mini__img').on('click', function(e){
//     e.preventDefault();
//     $('.header__top-search--mini').toggleClass('open');
// });


// $('.search-mini').on('click', function(e){
//     e.preventDefault();
//     $('.search-mini__img').toggleClass('search-mini__img-none');
// });

});