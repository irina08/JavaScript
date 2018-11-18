/* 
	HW 2 Extra Credit CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 09/05/2018 
	Desc: It's an external hw2e.js file
		  for hw2_e.html ("Exchange rates")
*/


document.getElementById('process').onclick=function(){process();};

document.getElementById('res').onclick=function(){res();};


function process() {
//create and initialize variables
var usDol, usD, brP, canD, euro, japY, mexP;

//input the US Dollar amount from form text box  	
usDol = document.getElementById("usd").value;

//convert numbers from strings to integers
usD = parseInt(usDol);

// calculate USA Dollars to other currency 
// round decimals var n = num.toFixed();
brP = (0.773902 * usD).toFixed(2);
canD = (1.315801 * usD).toFixed(2);
euro = (0.864513 * usD).toFixed(2);
japY = (110.989273 * usD).toFixed(2);
mexP = (19.332035 * usD).toFixed(2);

//Display the conversion 
document.getElementById("bp").value = brP;
document.getElementById("cd").value = canD;
document.getElementById("eu").value = euro;
document.getElementById("jy").value = japY;
document.getElementById("mp").value = mexP;
}


function res()
{
document.getElementById("usd").innerHTML = "";
}
