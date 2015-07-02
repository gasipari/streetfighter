$(document).ready(function() {
	// listen to mouseenter event on ryu div
	$('.ryu').mouseenter(function() {
		//console.log('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function(){
		//console.log($('.ryu-ready').css('display'));
		// play hadouken sound
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		// show hadouken and animate it to the right
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-120px');
			})
	})
	.mouseup(function() {
		// ryu goes back to his ready position
		console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
	
	$(document).keydown(function(event){
		if(event.keyCode == 88){
			// $('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	})
	$(document).keyup(function(event){
		if(event.keyCode == 88){
			$('.ryu-cool').hide();
			$('.ryu-still').show();

		}
	})
})

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}