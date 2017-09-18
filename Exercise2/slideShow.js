var currentImage = 1;
var previousImage;

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
	if(currentImage == 1) {
	
	}
}
