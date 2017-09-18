function validate() {
	var firstInput = document.getElementById("first").value;
	var secondInput = document.getElementById("second").value;
	
	if(firstInput != secondInput) {
		alert("Passwords do not match");
	} else if(firstInput.length < 8) {
		alert("Passwords must be at least 8 characters long");
	} else {
		alert("Password validated!");
	}
}
