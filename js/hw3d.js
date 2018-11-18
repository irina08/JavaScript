/* 
	HW 3 Part 3 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 09/21/2018 
	Desc: It's an external hw3d.js file
		  for hw3_d.html 
		  ("Math.random and multiplication.")
*/


//function 'generateVal' generates random integer numbers (o-9) 
// and then ask user about the multiplication
var number1, number2;
var yes, no;

function generateVal(){
	number1 = Math.floor(Math.random() * 10);
	number2 = Math.floor(Math.random() * 10);
	document.getElementById("question").innerHTML = 'How much is ' + number1 + 
		' times ' + number2 + '?';
	}


//checkAnswer: displays comments is answer right or wrong
//asks if user wants to try again 

function checkAnswer() {
	var answer = parseInt(document.forms["myform"].elements["check"].value);
	var corAnswer = number1 * number2;	

	if (corAnswer == answer) {
		document.getElementById("result").innerHTML = ("Very Good! Do you want to try again?");
		$("#myform")[0].reset();
		
	} 
	else 
	{	
		document.getElementById("result").innerHTML = ("No. Please try again.");
		$("#myform")[0].reset();
	}
}


function goodbye() {
	document.getElementById("result").innerHTML = ("Thank you. GoodBye.");
	document.getElementById("question").innerHTML = "";
	
}