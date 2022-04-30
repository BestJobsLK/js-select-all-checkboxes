var checkBoxes = document.getElementsByClassName("chkbx");

var selectAll = document.getElementById("selall");
var selectNone = document.getElementById("selnon");

selectAll.addEventListener("click", function(e){
	e.preventDefault();
	for ( var i = 0; i < checkBoxes.length; i++ ) {
		checkBoxes[i].checked = true;
	}
});

selectNone.addEventListener("click", function(e){
	e.preventDefault();
	for ( var i = 0; i < checkBoxes.length; i++ ) {
		checkBoxes[i].checked = false;
	}
});


