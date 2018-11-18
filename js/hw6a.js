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


function mathCalculate() {
	var errorMessage = "Please enter a number with at least four decimal positions.";
	var num = parseFloat(document.getElementById("numberInput").value);
	var re = /^[-+]?[0-9]+\.\d{4,}$/;
	
    if ( isNaN(num) ) {               
        document.getElementById("errorMes").innerHTML = errorMessage;
    } 	
	else if ( !re.test( num ) ) {
		document.getElementById("errorMes").innerHTML = errorMessage;
	}
	else {
		document.getElementById("result").value =
		"The inputted number: " + num +
		"\nThe number rounded to the nearest integer using Math.round(): " +
		Math.round(num) + 
		"\n The Number rounded to the nearest integer using Math.floor(): " +
		Math.floor(num + .5) +
		"\n The Square root of the Number calculated and rounded to the nearest integer: " +
		Math.round(Math.sqrt(num)) + 
		"\n The number rounded to the nearest tenths using toFixed(): " +
   	  	num.toFixed(1) +
     	"\n The number rounded to the nearest hundredths using toFixed(): " +
    	 num.toFixed(2) +
   	 	"\n The number rounded to the nearest thousandths using Math.round(): " +
     	Math.round(1000 * num) / 1000 ;	
	}	
}


