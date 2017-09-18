var currentImage = 1;
var imageArray = ["https://s3.amazonaws.com/one_org_international/international/wp-content/uploads/2013/08/one-logo-og-image.jpg", "https://pbs.twimg.com/profile_images/682243702127902720/jucLIdV6.png", "https://vignette1.wikia.nocookie.net/phobia/images/f/f4/Three.png/revision/latest?cb=20161112225540", "http://www.fulltimefba.com/wp-content/uploads/2015/04/4NumberFourInCircle.png", "https://4.bp.blogspot.com/-Y6Hu55OWGnE/WQPdhL4T2uI/AAAAAAAAdsk/jnehZpsNVWUSCDxb3icAR5ZTpWmVKdlpQCLcB/s1600/Five.png"];

function back() {
	if(currentImage == 1) {
		currentImage = 5;
	} else {
		currentImage--;
	}
	
	displayImage();
}

function forward() {
	if(currentImage == 5) {
		currentImage = 1;
	} else {
		currentImage++;
	}
	
	displayImage();
}

function displayImage() {
	document.getElementById("image").src = imageArray[currentImage - 1];
}
