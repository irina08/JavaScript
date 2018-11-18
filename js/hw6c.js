/* 
	HW 6 Part 3 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 11/07/2018 
	Desc: It's an external hw6c.js file
		  for hw6_c.html 
		  ("Current date and time. 
		  Using String method split() for telephone numbers.")
*/

/* JQuery to show/hide instructions */
$(document).ready(function () {
	$("#panel1").click(function () {
		$("#panel2").slideToggle("slow");
	});
});

//output local date and time, UTC date and time, and difference

 var currentDate = new Date();
 document.getElementById("dateResult").value = 
  	"Using 'toString()' method: \n" + currentDate.toString() + 
 	"\n\nUsing 'toLocaleString()' method: \n" + currentDate.toLocaleString() + 
 	"\n\nUsing toUTCString() method: \n" + currentDate.toUTCString() + 
 	"\n\nDifference between Pacific and UTC time zones in hours: " +
 	(currentDate.getTimezoneOffset() / 60) + 
 	"\n\nDifference between Eastern and UTC time zones in hours: " +
 	((currentDate.getTimezoneOffset() - 180) / 60) + "\n ";
	
//use a jQuery mask to ensure valid input 
$(document).ready(function(){
	jQuery(function($){
		$("#phoneNumber").mask("(999) 999-9999");
	});
});
	
function splitPhoneNumber() {

	if($("#myform").valid()) {
		var phoneNumber = $('#phoneNumber').val();
		var tokens = phoneNumber.split(/[' '-]/)
		$('#areaCode').val(tokens[0].substr(1,3));
		$('#phone7').val(tokens[1] + '-' + tokens[2]);
		$('#phone3').val(tokens[1]);
		$('#phone4').val(tokens[2]);

/*		var tokens1 = phoneNumber.split( ' ' );
		var tokens2 = tokens1[1].split( '-' );
		$('#areaCode').val(tokens1[0].substr(1,3));
		$('#phone3').val(tokens2[0]);
		$('#phone4').val(tokens2[1]);
		$('#phone7').val(tokens2[0] + '-' + tokens2[1]);
*/	
	} 
	else {
			return false;
		}
}