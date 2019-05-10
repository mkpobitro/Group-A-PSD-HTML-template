$(document).ready(function(){

  $('.bars').click(function(){
    $('.main-menu').children('ul').slideToggle();
  })






  $(".scroll-btn").click(function(){
  	$("html").animate({'scrollTop' : '0'}, 1000);

  	});



  	$(window).scroll(function(){
  		var distance = $(window).scrollTop();

  		if(distance > 500){
  		$(".scroll-btn").slideDown(500);
  	}
  	else{
  		$(".scroll-btn").slideUp(500);
  	}


  	})





})
