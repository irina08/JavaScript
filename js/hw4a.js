/* 
	HW 4 Part 1 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 10/14/2018 
	Desc: It's an external hw4a.js file
		  for hw4_a.html ("Calculate integers")
*/

//Part A
//for loop that calculates the sum and product of every 3 integer from 5-20 inclusive
var sum1 = 0;
var product1 = 1;

for (var number = 5; number <= 20; number += 3) 
{
	sum1 += number;
	product1 *= number;
}

document.getElementById("sumA").innerHTML = ("The <strong>sum</strong> of every third integer " +
	"from 5 to 20 inclusive is <strong>"  + sum1 + "</strong>" + 
	"<br>5 + 8 + 11 + 14 + 17 + 20 = " + parseInt(5 + 8 + 11 + 14 + 17 + 20));

document.getElementById("productA").innerHTML = ("The <strong>product</strong> of every third integer " +
	"from 5 to 20 inclusive is <strong>" + product1.toLocaleString() + "</strong>" + 
	"<br>5 * 8 * 11 * 14 * 17 * 20 = " + parseInt(5 * 8 * 11 * 14 * 17 * 20).toLocaleString());

//PartB
//while loop that calculates the sum and product of every forth integer from 3-31 inclusive
var sum2 = 0;
var product2 = 1;
var x = 3;

while (x <= 31) 
{
	sum2 += x;
	product2 *= x;
	x = x + 4;
}
	
document.getElementById('sumB').innerHTML = ("The <strong>sum</strong> of every fourth integer from 3 to 31 " + 
	"inclusive is <strong>" + sum2 + "</strong>" + 
	"<br>3 + 7 + 11 + 15 + 19 + 23 + 27 + 31 = " + parseInt(3 + 7 + 11 + 15 + 19 + 23 + 27 + 31));

document.getElementById('productB').innerHTML = ("The <strong>product</strong> of every fourth integer " +
	"from 3 to 31 inclusive is <strong>" + product2.toLocaleString() + "</strong>" + 
	"<br>3 * 7 * 11 * 15 * 19 * 23 * 27 * 31 = " + parseInt(3 * 7 * 11 * 15 * 19 * 23 * 27 * 31).toLocaleString());




