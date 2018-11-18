/* 
	HW 6 Part 2 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 11/07/2018 
	Desc: It's an external hw6b.js file
		  for hw6_b.html 
		  ("Searching a character with String method charAt().")
*/

/* JQuery to show/hide instructions */
	$(document).ready(function () {
		$("#panel1").click(function () {
			$("#panel2").slideToggle("slow");
	});
});

function search() {
            		
	var textToSearch = document.getElementById("inputText").value;  
	var stringToSearch=textToSearch.toLowerCase();           

	var key = document.getElementById("key").value.toLowerCase().charAt(0);
	var keyLower=key.toLowerCase();

	var count=0;
	var i;
	for (i=0; i < stringToSearch.length; i++) 
	{
		if (stringToSearch.charAt(i) == keyLower)
    		count++;     
	}         
      
	if (count > 0) 
	{
		document.getElementById("output").value=count + 
   	 " occurrence(s) of '" + keyLower + "' found";
	} 
	else 
	{
    	var newWindow = window.open("", "new_window", "top=10,left=10,width=300,height=100");

   	 	var myText = "<html>\n";
        myText += "<head>\n";
        myText += "<title>Popup Window</title>\n";
        myText += "</head>\n";
        myText += "<body>\n";
        myText += "<div style='text-align:center;'>\n";
        myText += "<p><b>Search character '" + keyLower + "' not found in the text string!</b></p>\n";
        myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
        myText += "</div>\n";
        myText += "</body>\n";
        myText += "</html>";


    	newWindow.focus();
    	newWindow.document.write(myText);
    	newWindow.document.close();
	}
	
}	
               

