/* 
	HW 5 Part 3 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 10/31/2018 
	Desc: It's an external hw5c.js file
		  for hw5_c.html ("Get a state information")
*/

/* JQuery to show/hide instructions */
	$(document).ready(function () {
		$("#panel1").click(function () {
			$("#panel2").slideToggle("slow");
	});
});


/* JQuery for 'instruction' with effects. */
$(function() {

	$( "#dialog" ).dialog({
		autoOpen: false,
		show: {
		effect: "explode",
		pieces: 30,
		duration: 1000
		},

		hide: {
		effect: "explode",
		pieces: 30,
		duration: 1000
		}
	});

	$( "#opener" ).click(function() {
		$( "#dialog" ).dialog( "open" );
	});
});


/* for getting state info or error message */
var stateArray = [ ["AL", "Alabama", "Montgomery", "4,779,736"],                     
                 ["AK", "Alaska", "Juneau", "710,231"],  
                 ["AZ", "Arizona", "Phoenix", "6,392,017"],
                 ["AR", "Arkanzas", "Little Rock", "2,915,918"],    
                 ["CA", "California", "Sacramento", "37,253,956"],    
                 ["CO", "Colorado", "Denver", "5,029,196"] ];    


function stateInfo()
{   
    var searchKey = document.forms["SearchForm"].elements["inputStateVal"].value;
    searchKey = searchKey.toUpperCase();  
    
    var found = false;
    for (var row = 0; row < stateArray.length; row++)
    {
	
       	if ((stateArray[row][0] == searchKey) || (stateArray[row][1] == searchKey))
     	{ 
       		document.getElementById("errors").innerHTML = "";
			document.getElementById("result").innerHTML =("Thanks for your inquiry, here is the information you requested:");
			document.getElementById("abbr").innerHTML = ("State abbreviation: " + stateArray[row][0]);
			document.getElementById("state").innerHTML = ("State name: " + stateArray[row][1]);
       		document.getElementById("capital").innerHTML = ("Capital: " + stateArray[row][2]);
       		document.getElementById("population").innerHTML = ("Population: " + stateArray[row][3]);  
       		row = stateArray.length;
       		found = true;
     	}           
    }

  	if ( found == false ) 
  	{
   		document.getElementById("errors").innerHTML = ("State not found! Please Check spelling and chose " + 
			"states only from table above!");
    }
}

