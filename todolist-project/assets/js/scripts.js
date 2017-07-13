

// toggle  text overline
	// since code is read sync it can only select elements that exists when the code is read
	// so make the event listen to changes of elements within ań element that already exists when the code is read
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

// delete text event
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});

	// stops the event from affection parents
	e.stopPropagation();
});

// input
$("input[type='text']").keypress(function(e){
	if (e.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	};
});

// input toggle 
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});