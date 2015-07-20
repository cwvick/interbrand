$(function() {
	$('.kv_content').css('visibility', 'hidden');
	var isInit = true;

  $('.kv_content').carouFredSel({
    circular: true,
    infinite: false,
    auto: false,
    responsive: true,
    prev: {
      button: ".btn_prev",
      key: "left"
    },
    next: {
      button: ".btn_next",
      key: "right"
    },
    scroll: {
      // fx: "crossfade",
      onBefore : function(data) {
      	$(this).trigger("currentPosition", function(pos) {
      		$('.nav_main').eq(pos).trigger('click');
      	});
      },
      onAfter : function(data) {
      	if ( isInit ) {
      		$('.kv_content').css('visibility', 'visible');
      		isInit = false;
      	} else {
      		window.location.href = $('.menu .nav_main.select').attr('href');
      	}	
      }
    },
    onCreate: function() {
    	var $selectedItem = $('.menu .nav_main.select');
    	var index = $('.menu .nav_main').index($selectedItem);
    	if ( index > 0 ) {
	    	$('.kv_content').trigger("slideTo", index);
	    }	else {
	    	$('.kv_content').css('visibility', 'visible');
      	isInit = false;
	    }
    }
  });

  $(document).on('click', '.nav_main', function(event) {
  	event.preventDefault();
  	var url_link = $(this).attr('href');
  	var index = $(this).data('index');

  	$('.nav_main').removeClass('select');

  	$(this).addClass('select');
  	$('.kv_content').trigger("slideTo", index-1);
  });

});
