/* 
	HW 5 Part 2 CNIT 133 Homeworks
	student: CNIT 133 Irina Golovko
	date: 10/30/2018 
	Desc: It's an external hw5b.js file
		  for hw5_b.html ("Pulldown menus")
*/


function goToNewPage1(form1) {
    var myDestinationPage1 = form1.destinationList.options[form1.destinationList.selectedIndex].value;
    window.location = myDestinationPage1;
}

function goToNewPage2(form2) {
    var myDestinationPage2 = form2.destinationList.options[form2.destinationList.selectedIndex].value;
    window.location = myDestinationPage2;
}




