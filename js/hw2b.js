/* 
	HW 2 Part 2 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 09/05/2018 
	Desc: It's an external hw2b.js file
		  for hw2_b.html ("Input 3 integers")
*/


document.getElementById('process').onclick=function(){process();};

document.getElementById('res').onclick=function(){res();};


function process() {

//declare variables
	var int1, int2, int3, sumInt, avgInt, prodInt;
	
//input the values from form text boxes using getElementById 	
int1 = document.getElementById("num1").value;
int2 = document.getElementById("num2").value;
int3 = document.getElementById("num3").value;

//convert numbers from strings to integers
n1 = parseInt(int1);
n2 = parseInt(int2);
n3 = parseInt(int3);

//make the calculations, including sum, average and product 	
sumInt = n1 + n2 + n3;
avgInt = (sumInt/3);
prodInt = n1 * n2 * n3;

//Display the Numbers that were typed in
//Display the Sum, Average and Product results
document.getElementById("results").value =
		("The inputted numbers: " + n1 + ", " + n2 + ", " + n3 +
		"\nThe smallest integer: " + Math.min(n1, n2, n3) +
		"\nThe largest integer: " + Math.max(n1, n2, n3) +
		"\nThe product of the integers: " + prodInt +
		"\nThe average of the integers: " + avgInt +
		"\nThe sum of the integers: " + sumInt)
}


function res()
{
document.getElementById("results").innerHTML = "";
}
