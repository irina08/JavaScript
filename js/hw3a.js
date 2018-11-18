/* 
	HW 3 Part 1 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 09/18/2018 
	Desc: It's an external hw3a.js file
		  for hw3_a.html 
		  ("Determine Student Grade")
*/

function process() {

//Declare variables
var hwavg, midEx, finalEx, arc, finalAvg;
var errMsg1 = "All numbers must be between 0 and 100";
var errMsg2 = "Student must retake this course";

hwavg = document.getElementById("hwAvg").value;
midEx = document.getElementById("midExam").value;
finalEx = document.getElementById("finalExam").value;
acr = document.getElementById("ACR").value;

// Validate input - if not a number or less than 0 or higher than 100 - alert errMsg1 

/*
if (isNaN(hwavg) || isNaN(midEx) || isNaN(finalEx) || isNaN(acr) || hwavg === "" || midEx === "" || finalEx === "" || acr === "" || hwavg > 100 || hwavg < 0 || midEx < 0 || midEx > 100 || acr < 0 || acr > 100 || finalEx < 0 || finalEx > 100)
{
	document.getElementById("errOut").innerHTML = errMsg1;
} 
*/

var inpAvg = document.getElementById("hwAvg");
var inpME = document.getElementById("midExam");
var inpFE = document.getElementById("finalExam");
var inpACR = document.getElementById("ACR");


if (!inpAvg.checkValidity() || !inpME.checkValidity() || !inpFE.checkValidity() || !inpACR.checkValidity()) {
	document.getElementById("errOut").innerHTML = errMsg1;
}

else {
	hwavgP = parseInt(hwavg);
	midExP = parseInt(midEx);
	finalExP = parseInt(finalEx);
	acrP = parseInt(acr);

//Calculate final average
	finalAvg = (.5 * hwavgP) + (.2 * midExP) + (.2 * finalExP) + (.1 * acrP);

//Determine final grade							
	document.getElementById("average").value = Math.round(finalAvg);

//Note: use true in switch statement and ranges for finalAvg and grades will work
	switch (true) {
	case (finalAvg >= 90):
		document.getElementById("grade").value = ("A")
		break;

	case (finalAvg >= 80):
		document.getElementById("grade").value = ("B")
		break;

	case (finalAvg >= 70):
		document.getElementById("grade").value = ("C")
		break;

	case (finalAvg >= 60):
		document.getElementById("grade").value = ("D");
		document.getElementById("errOut").innerHTML = errMsg2;
		break;

	default:
		document.getElementById("grade").value = ("F")
		document.getElementById("errOut").innerHTML = errMsg2;
		break;
	}
	}
}


			

