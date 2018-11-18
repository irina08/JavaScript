/* 
	HW 4 Part 2 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 10/14/2018 
	Desc: It's an external hw4b.js file
		  for hw4_b.html ("Calculating f Compound Interest")
*/

var rate, year;

for (rate = 5; rate <= 10; rate++)
{
	document.write( 
		"<br><table class='center compound'>" +
  		"<tr class='compound'>" +
		"<th class='compound'>Year</th>" +
		"<th class='compound'>Amount on deposit</th>" +
		"<th class='compound'>Interest Rate</th>" +
		"</tr>");
				
	for (year = 1; year <= 10; year++ ) 
	{ 
		document.write("<tr class='compound'>");
		document.write("<td class='compound'>" + year + "</td>" );
		document.write("<td class='compound'>" + (Math.pow((1 + (rate / 100)), year) * 1000).toFixed(2) + "</td>" );
		document.write("<td class='compound'>" + (rate / 100).toFixed(2) + "</td>" );
		document.write( "</tr>" ); 
	}
	document.write( "</table>" );
}



