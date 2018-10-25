$(document).ready(function(){

  $(".one_title").hover(function(){
      $(".one_img").toggleClass("active");  //Toggle the active class to the area is hovered
  });

  $(".two_title").hover(function(){
      $(".two_img").toggleClass("active");  //Toggle the active class to the area is hovered
  });

  $(".three_title").hover(function(){
      $(".three_img").toggleClass("active");  //Toggle the active class to the area is hovered
  });

  $(".four_title").hover(function(){
      $(".four_img").toggleClass("active");  //Toggle the active class to the area is hovered
  });

  $(".about_link").hover(function(){
      $(".about_img").toggleClass("active");  //Toggle the active class to the area is hovered
  });

  // Titles
  $(".one_title").hover(function(){
      $(".two_title, .three_title, .four_title ").toggleClass("disabled");  //Toggle the active class to the area is hovered
  });

  $(".two_title").hover(function(){
      $(".one_title, .three_title, .four_title ").toggleClass("disabled");  //Toggle the active class to the area is hovered
  });

  $(".three_title").hover(function(){
      $(".two_title, .one_title, .four_title ").toggleClass("disabled");  //Toggle the active class to the area is hovered
  });

  $(".four_title").hover(function(){
      $(".two_title, .one_title, .three_title ").toggleClass("disabled");  //Toggle the active class to the area is hovered
  });

});

$(window).scroll(function() {
    var nav = $('.navbar');
    var top = 1;
    if ($(window).scrollTop() >= top) {

        nav.addClass('scrolled');

    } else {
        nav.removeClass('scrolled');
    }
});

$(window).scroll(function() {
    var nav = $('.block_home_header');
    var top = 1;
    if ($(window).scrollTop() >= top) {

        nav.addClass('scrolled');

    } else {
        nav.removeClass('scrolled');
    }
});
