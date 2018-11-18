/* 
	HW 3 Part 2 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 09/18/2018 
	Desc: It's an external hw3b.js file
		  for hw3_b.html 
		  ("jQuery UI tooltip")
*/


function process() {

//validate input for positive number 	
var errMsg1 = "All Items are required and must be positive number";

var inp1 = document.getElementById("item1");	
var inp2 = document.getElementById("item2");	
var inp3 = document.getElementById("item3");
var inp4 = document.getElementById("item4");

if (!inp1.checkValidity() || !inp2.checkValidity() || !inp3.checkValidity() || !inp4.checkValidity()) {
	document.getElementById("errOut").innerHTML = errMsg1;
}

else {
// get input number from getElementById
var itemOne = parseInt(document.getElementById("item1").value);
var itemTwo = parseInt(document.getElementById("item2").value);
var itemThree = parseInt(document.getElementById("item3").value);
var itemFour = parseInt(document.getElementById("item4").value);

//Multiply to get the total amount made by each item and round to 2 digits
var totalOne = parseFloat(itemOne * 239.99).toFixed(2)
var totalTwo = parseFloat(itemTwo * 129.75).toFixed(2)
var totalThree = parseFloat(itemThree * 99.95).toFixed(2)
var totalFour = parseFloat(itemFour * 350.89).toFixed(2)

//Calculate the total number and amount sold, round to 2 digits
var totalAmountSold = (itemOne + itemTwo + itemThree + itemFour);
var totalWeekly = (((+totalOne + +totalTwo + +totalThree + +totalFour)*.09) + 200).toFixed(2);

//Show results 
document.getElementById("itemSold1").value = itemOne;
document.getElementById("itemSold2").value = itemTwo;
document.getElementById("itemSold3").value = itemThree;
document.getElementById("itemSold4").value = itemFour;

document.getElementById("totalOne").value = totalOne;
document.getElementById("totalTwo").value = totalTwo;
document.getElementById("totalThree").value = totalThree;
document.getElementById("totalFour").value = totalFour;

document.getElementById("totalSold").value = totalAmountSold;
document.getElementById("totalWeeklyEarnings").value = totalWeekly;
	}
}

			

