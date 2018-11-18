/* 
	HW 4 Extra Credit CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 10/14/2018 
	Desc: It's an external hw4c.js file
		  for hw4_c.html ("Print Square of Asteriks")
*/

function process()
{
	var errMsg = "Square side must be between 2 and 10 inclusive" 
				+ "\nand must be the whole number";
				
	var inp = document.getElementById("num");	
	if (!inp.checkValidity()) 
	{
		document.getElementById("error").innerHTML = errMsg;
	}
	else 
	{
		var num, row, column, box;

		num = parseInt(document.getElementById("num").value);

		box = "<pre>";

		for(row = 1; row <= num; row ++)
		{
			box +=  "* " ;

			for (column = 2; column <= num; column ++)
			{
				if (column == num || row == 1 || row == num)
				{
					box += "* ";
				}
				else
				{
					box += "  ";
				}
			}
			box += "<br>";
		}
		box += "</pre>";
		document.getElementById("box").innerHTML = box;
	}
}
	 






