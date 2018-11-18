/* 
	HW 3 Part 3 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 09/18/2018 
	Desc: It's an external hw3c.js file
		  for hw3_c.html 
		  ("Temperature Converter")
*/


/* JQuery for validation inputted temperature
	and displays error message input is not a number or empty
*/
$(document).ready(function(){
    $("#myform").validate({
	  // Rules for each input item
	  rules: 
	  {
		temperature: { required: true, number: true}
       
	  }
	});	  
});

//the user clicks 'Farenheit to Celsius' button 	
function process(){	
	if ($("#myform").valid()){		
		var far = document.getElementById("temperature").value;
		var farenheit = parseInt(far);
		var toC = ((5/9)*(farenheit - 32)).toFixed(1);
		document.getElementById("output").value = toC + " C";
	}
}


//the user clicks 'Celsius to Farenheit' button 	
function process1(){
	if ($("#myform").valid()){
		var celsius = parseInt(document.getElementById("temperature").value);
		var toF = (((9/5) * celsius) + 32).toFixed(1);
		document.getElementById("output").value = toF + " F";
	}
}


