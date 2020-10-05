$( document ).ready(function() {
    $('.slider').slick({
    	infinite: true,
        slidesToShow: 3,
  	    slidesToScroll: 3,
        swipe:true

    });
    $('.autoplay').slick({
    	infinite: true,
        slidesToShow: 3,
  	    slidesToScroll: 3,
  	    autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:true

    });
    $('.variable_width').slick({
 	 	infinite: true,
  		speed: 300,
  		slidesToShow: 1,
  		variableWidth: true
    });

    $('.center').slick({
  		centerMode: true,
  		centerPadding: '60px',
  		slidesToShow: 3,
 
	});
	$('.lazy').slick({
  		lazyLoad: 'ondemand',
  		slidesToShow: 3,
  		slidesToScroll: 1
	});
	$('.fade').slick({
  		infinite: true,
  		speed: 500,
  		fade: true
  		
	});

});
