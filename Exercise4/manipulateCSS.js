function manipulateCSS() {
	var text = document.getElementById("text");
	var borderRed = document.getElementById("borderr").value;
	var borderGreen = document.getElementById("borderg").value;
	var borderBlue = document.getElementById("borderb").value;
	var width = document.getElementById("borderw").value;
	var bgr = document.getElementById("backgroundr").value;
	var bgg = document.getElementById("backgroundg").value;
	var bgb = document.getElementById("backgroundb").value;
	
	text.style.borderColor = "rgb(" + borderRed + ", " + borderGreen + ", " + borderBlue + ")";
	text.style.borderWidth = width;
	text.style.backgroundColor = "rgb(" + bgr + ", " + bgg + ", " + bgb + ")";
}