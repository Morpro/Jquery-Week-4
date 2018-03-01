
//the page will generate a random number.
// when the gem button is selected it will generate a random number and add it to score.
// score will be dispalyed and then taking that  number and adding it to current score
// need to set function to check if the score board button is the same as generated number.
// have conditon statement to check if user wins or lost

var wins = 0;
var losses = 0;
var add = 0;
var random = Math.round(Math.random()*101)+19;




console.log(random);
$("#random_display").html("random guess "+random);

//these variables are the button and they generate random numbers
var yellow = Math.round(Math.random()*11)+1;
var red = Math.round(Math.random()*11)+1;
var blue = Math.round(Math.random()*11)+1;
var green = Math.round(Math.random()*11)+1;



$("#red").attr("data", red);
$("#blue").attr("data", blue);
$("#yellow").attr("data", yellow);
$("#green").attr("data", green);




var updateadd = function (){
	$('.add').empty();
	$('.add').append(add);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}


var logic = function (){
	if (add == total) {
		wins = wins + 1;
		
		
	}else if(add > total){
		losses = losses + 1;
		restart();

	}else{
		updateadd();
	}
}
$('.total').append(total);

$('.add').append(add);


