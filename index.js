$(document).ready(function(){
	$("#desc1").hide();
	$("#desc2").hide();
	$("#desc3").hide();
	$(".link").hide();
	$(".modal").hide();

	$("#first").click(function(){
		$("#desc1").toggle();
		$("#desc2").hide();
		$("#desc2").hide();
	});

	$("#second").click(function(){
		$("#desc2").toggle();
		$("#desc1").hide();
		$("#desc3").hide();
	});

	$("#third").click(function(){
		$("#desc3").toggle();
		$("#desc2").hide();
		$("#desc1").hide();
	});

	$(".dropbtn").click(function(){
		$(".link").toggle();
	})

	$(".modalbtn").click(function(){
		$(".modal").show();
		$("body").css("background-color", "gray");
	})

	$(".close").click(function(){
		$(".modal").hide();
		$("body").css("background-color", "white");
	})



	
});