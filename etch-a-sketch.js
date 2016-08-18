
$('document').ready(function() {
	$('.options').on('click', function (){
		var	number = prompt("Please enter an integer between 1 and 30 for the sketch size.");
		while (number < 1 || number > 30) {
		var number = prompt("To start, please enter an integer between 1 and 30.");
		};
		if (number >= 1 && number <= 30) {
			createGrid();
		};
	});
});

function createGrid() {
	var squareSize = 550 / number;
	$('.container').prepend($('.grid').css({"width": "squareSize", "height" : "squareSize"}))
};

function randomColor() {
	createGrid();
	$('.grid').on('mouseenter', function () {
		var c1 = #7bb3ff;
		var c2 = #e86af0;
		var c3 = #9e379f;
		var c4 = #493267;
		var c5 = #373854;
		var colorNumber = Math.floor(Math.random()*5 + 1);
		var color = return "var c" + colorNumber;
		$(this).css({"background-color": "color"});
	});
};

$('.roriginal').on('click',function() {
	$('.grid').css({"background-color", "#011f4b"});
	$('.grid').on('mouseenter', function() {
		var opacity = $(this).css("opacity");
		while (opacity != 0) {
			$(this).css({"opacity", opacity - 0.1});
		};
	});
		};
});