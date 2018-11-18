/* 
	HW 2 Part 3 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 09/05/2018 
	Desc: It's an external hw2c.js file
		  for hw2_c.html 
		  ("Input 5 numbers and jQuery")
*/


document.getElementById('process').onclick=function(){process();};
document.getElementById('res').onclick=function(){res();};


function process() {

//declare variables and set value
var number1, number2, number3, number4, number5, n1, n2, n3, n4, n5;
var zeroCount = 0;
var underZCount = 0;
var overZCount = 0;

//input 5 integers from form text boxes using getElementById 
number1 = document.getElementById("num1").value;
number2 = document.getElementById("num2").value;
number3 = document.getElementById("num3").value;
number4 = document.getElementById("num4").value;
number5 = document.getElementById("num5").value;

//convert numbers from strings to integers
n1 = parseInt(number1);
n2 = parseInt(number2);
n3 = parseInt(number3);
n4 = parseInt(number4);
n5 = parseInt(number5);

//check to see if numbers are less than, equal, or greater than 0
if (n1 < 0)
	underZCount = underZCount + 1;
if (n1 > 0)
	overZCount = overZCount + 1;
if (n1 == 0)
	zeroCount = zeroCount + 1;

if (n2 < 0)
	underZCount = underZCount + 1;
if (n2 > 0)
	overZCount = overZCount + 1;
if (n2 == 0)
	zeroCount = zeroCount + 1;

if (n3 < 0)
	underZCount = underZCount + 1;
if (n3 > 0)
	overZCount = overZCount + 1;
if (n3 == 0)
	zeroCount = zeroCount + 1;

if (n4 < 0)
	underZCount = underZCount + 1;
if (n4 > 0)
	overZCount = overZCount + 1;
if (n4 == 0)
	zeroCount = zeroCount + 1;

if (n5 < 0)
	underZCount = underZCount + 1;
if (n5 > 0)
	overZCount = overZCount + 1;
if (n5 == 0)
	zeroCount = zeroCount + 1;

//Display the entered numbers and number of 
//negative and postive numbers and zeros

document.getElementById("results").value = ("The inputted numbers: " + 
				n1 + ", " + n2 + ", " + n3 + ", " + n4 + ", " + n5 +
				"\nNumber of Negative Numbers: " + underZCount + 
				"\nNumber of Positive Numbers: " + overZCount + 
				"\nNumber of Numbers equals to Zero: " + zeroCount)
}


function res()
{
document.getElementById("results").innerHTML = "";
}
