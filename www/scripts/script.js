$(document).ready(function () {

// Open/Close Menu
let $burger = $('.js-header-burger');
let $nav = $('.js-nav');

$burger.on('click', function () {

  $nav.slideToggle();

});

//Accordions
let prevBtn;

$('.js-accordion-btn').on('click', function() {
  if (this === prevBtn) {
    $(this).next().slideToggle();
    return;
  }

  $(this).next().slideDown();
  $(prevBtn).next().slideUp();
  prevBtn = this;
})

//Contact tabs
$('.js-tabs-link').on('click', function(event) {
event.preventDefault();

let index = $(this).index('.js-tabs-link');

$('.js-tabs-link').removeClass('active');
$(this).addClass('active');

$('.js-contact-item').removeClass('active');
$('.js-contact-item').eq(index).addClass('active');
});


});
