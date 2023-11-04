$(function(){
	


// this piece of code is from stackoverflow    
// Animate the element's value from 0% to value you will set:
$({someValue: 0}).animate({someValue: 76}, {
	duration: 2000,
	easing:'swing', // can be anything
	step: function() { // called on every step
		// Update the element's text with rounded-up value:
		$('.main__circle-first').text(Math.ceil(this.someValue));
	}
});



})