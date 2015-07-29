$(function() {
  $('.kv_content img').one('load', function() {
    $(this).fadeIn('slow');
  }).each(function() {
    if(this.complete) $(this).load();
  });
  
  var menu_count = $('.nav_main').length;

  $(document).on('click', '.btn_prev, .btn_next', function() {
    var $selectedItem = $('.menu .nav_main.select');
    var index = $('.menu .nav_main').index($selectedItem);
    var next = (index < menu_count - 1) ? index + 1 : 0;
    var prev = (index > 0) ? index - 1 : menu_count - 1;

    if ($(this).hasClass('btn_prev')) {
      $('.nav_main').eq(prev).trigger('click');
    } else if ($(this).hasClass('btn_next')) {
      $('.nav_main').eq(next).trigger('click');
    }

  });

  $(document).on('click', '.nav_main', function(event) {
    event.preventDefault();
    var url_link = $(this).attr('href');
    var index = $(this).data('index');

    $('.nav_main').removeClass('select');

    $(this).addClass('select');

    $('.kv_content img').fadeOut('slow', function() {
      window.location.href = url_link;
    });

  });

  $(document).on('keydown', function(event) {
    var keyCode = event.keyCode;

    if (keyCode == 39) {
      $('.btn_next').trigger('click');
    } else if (keyCode == 37) {
      $('.btn_prev').trigger('click');
    }
  });

});
