$(".order__carousel_type_top").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".order__carousel_type_bottom",
});
$(".order__carousel_type_bottom").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".order__carousel_type_top",
  dots: false,
  focusOnSelect: true,
  arrows: false,
});

$(".brends__carousel").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  focusOnSelect: true,
  arrows: false,
});
