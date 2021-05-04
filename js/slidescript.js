/*JS Code for slideshow*/

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "media/globe.png";
images[1] = "media/map.jpg";
images[2] = "media/peace.jpg";
images[3] = "media/community.jpg";
images[4] = "media/ecology.jpg";

// Change Image
function changeImg(){
  document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

