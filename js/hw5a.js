/* 
	HW 5 Part 1 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 10/28/2018 
	Desc: It's an external hw5a.js file
		  for hw5_a.html ("Validating form fields data")
*/

$(document).ready(function(){

$("#myform").validate({
		rules: {
			email: {
				required: true,
				email: true
	     	}
		 },
		  
		 messages: {
			 name: "Please enter a Name",
		
			 email: {
				 required: "Please provide an e-mail address.",
				 email: "This is not a valid email address.",
			 },
		
			 age: "Please chose your age",
			 gender: "Please chose your gender",
			 car: "Please chose your interest",
			 opinion: "Please provide your opinion",
			 interest: "Please chose a car",	
	   	 },

/* placement of error messages */
		 
		 errorPlacement: function(error, element) {
			 if ( element.is(":radio") || element.is(":checkbox")) {
				 error.appendTo( element.parent());
			 } else {
				 error.insertAfter(element);
			 }
		 } 
	 });
});
