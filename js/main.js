$(function() {

var nav = $("nav").css("border-bottom");

	$(".navbar-toggle").click(function() {

	if  ( $("nav").attr("style") == undefined ) {

		$("nav").css("border-bottom" , "1px solid rgb(231, 231, 231)");

	} else {

		$("nav").css('border-bottom', '');

	}

	});

	$("nav li a").click(function() {
		
		$(this).addClass('active');
		$("nav li a").not(this).removeClass('active');

	});

}); // end ready
