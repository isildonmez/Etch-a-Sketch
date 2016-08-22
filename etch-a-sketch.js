
$('document').ready(function() {
	$('.options').on('click', function (){
		var	number = prompt("Please enter an integer between 1 and 100 for the sketch.");
		while (number < 1 || number > 100) {
			var number = prompt("Invalid number! Please enter an integer between 1 and 100.");
		};
		clearGrid(number);
		createGrid(number);
	});
	$('#original').on('click', original);
	$('#rOriginal').on('click', rOriginal);
	$('#rColor').on('click', randomColor);
	$('#trailer').on('click', trailer);
	$('#clear').on('click', clearGrid);
});


function createGrid(number) {
	var squareSize = 550 / number;
	for(var i=0; i<number*number; i++){
		$('.container').append($('<div class=grid></div>').css({"width":squareSize, "height":squareSize}));
	};
};

function clearGrid() {
	$('.grid').remove();
};

//TODO
function original() {
	$('.grid').css({"background-color": "#263238", "opacity": 0});
	$('.grid').on('mouseenter', function() {
		var opacity = +$(this).css("opacity");
		if (opacity < 1) {
			$(this).css("opacity", opacity + 0.1);
		};
	});
};

function rOriginal() {
	$('.grid').css({"background-color": "#263238", "opacity": 1});
	$('.grid').on('mouseenter', function() {
		var opacity = $(this).css("opacity");
		if (opacity > 0) {
			$(this).css("opacity", opacity - 0.1);
		};
	});
};

function randomColor() {
	$('.grid').on('mouseenter', function () {
		var colors = ["#7bb3ff", "#e86af0", "#9e379f", "#493267", "#373854"];
		var colorNumber = Math.floor(Math.random()*5);
		var color = colors[colorNumber];
		$(this).css({"background-color": color});
	});
};

function trailer() {
	$('.grid').css({"background-color": "#9E9E9E"});
	$('.grid').hover(function(){
		$(this).css({"opacity":0});
	}, function() {
		$(this).fadeTo(1000, 1);
	});
};






