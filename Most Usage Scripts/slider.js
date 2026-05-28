/* 
Slick CSS  - Add this in head tag
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>

Slick JS  - Add this before body tag
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

Add these attributes to your HTML structure:
[data-slick="slider"] - Main slider wrapper element.
[data-slick="list"] - Element containing all slide items.
[data-slick="prev"] - Previous arrow button.
[data-slick="next"] - Next arrow button.
[data-slick="dots"] - Element where slider dots/pagination will be appended.

*/

// Normal Slider
$(document).ready(function () {

  $('[data-slick="slider"]').each(function () {

    const $slider = $(this);
    const $list = $slider.find('[data-slick="list"]');

    $list.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
     
      swipe: true,
  		swipeToSlide: true,
  		draggable: true,
  		touchThreshold: 10,
      responsive: [
        {
          breakpoint: 991, // tablet
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767, // mobile
          settings: {
            slidesToShow: 1
          }
        }
      ],
      

      arrows: true,
      dots: false, // True if you want pagination dots
      pauseOnHover: false,
      pauseOnFocus: false,

      appendDots: $slider.find('[data-slick="dots"]'),
      prevArrow: $slider.find('[data-slick="prev"]'),
      nextArrow: $slider.find('[data-slick="next"]'),
    });

  });

});
