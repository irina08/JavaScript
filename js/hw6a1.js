/* 
	HW 6 Part 1 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 11/07/2018 
	Desc: It's an external hw6a.js file
		  for hw6_a.html 
		  ("Math Objects and methods.")
*/

/* JQuery to show/hide instructions */
$(document).ready(function () {
	$("#panel1").click(function () {
		$("#panel2").slideToggle("slow");
	});
});


// jquery validation of form
$(document).ready(function () {
	$("#myform").validate({
		rules: {
			numberInput: {
				required: true,
				number: true,
				/*
				pattern: ^[1-9]\d*(\.\d{4,})$,*/
			
			}
		},
				messages: {
				numberInput: {
					required: "Please enter a number with at least four decimal positions",
					number: "Please enter a number with at least four decimal positions",
				}
		}
	})
});

function mathCalculate() {
	if ($("#myform").valid()) {
	var num = parseFloat(document.getElementById("numberInput").value);

	document.getElementById("result").value =
		"The inputted number: " + num +
		"\n Rounded to the nearest integer using mathRound: " +
		roundToIntegerRound(num) +
		"\n Rounded to the nearest integer using mathFloor: " +
		roundToIntegerFloor(num) +
		"\n Square root calculated and rounded to the nearest integer: " +
		squareRootToRound(num) +
		"\n Rounded to the nearest tenth using mathFloor: " +
		roundToTenthsMathFloor(num) +
		"\n Rounded to the nearest hundredth using mathFloor: " +
		roundToHundredthsMathFloor(num) +
		"\n Rounded to the nearest thousandth using mathFloor: " +
		roundToThousandthsMathFloor(num);
	}
}

function roundToIntegerRound(numberInput) {
	return (Math.round(numberInput));
}

function roundToIntegerFloor(numberInput) {
	return (Math.floor(numberInput + .5));
}

function roundToTenthsMathFloor(numberInput) {
	return Math.floor(numberInput * 10 + .5) / 10;
}

function roundToHundredthsMathFloor(numberInput) {
	return Math.floor(numberInput * 100 + .5)/100;
}

function roundToThousandthsMathFloor(numberInput) {
	return Math.floor(numberInput * 1000 + .5) / 1000;
}
						
function squareRootToRound(numberInput) {
	return (Math.sqrt(numberInput).toFixed());
}
