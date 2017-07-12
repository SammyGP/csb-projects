

// toggle  text overline
$("li").click(function(){
	$(this).toggleClass("completed")
});

// delete text event
$("span").click(function(e){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});

	// stops the event from affection parents
	e.stopPropagation();
});