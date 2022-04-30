$(document).ready(function(){

	$('#selall').on("click", function(e){
		e.preventDefault();
		$('.chkbx').prop("checked", true);
	});

	$('#selnon').on("click", function(e){
		e.preventDefault();
		$('.chkbx').prop("checked", false);
	});

});