/*JS Code for contact form*/
$(document).ready(function() {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  var submitId = document.getElementById("submitId");
});

submitId.addEventListener("click", function(){document.getElementById('form').addEventListener('submit', submitFunc);});


function submitFunc() {
  var inName = document.getElementById("nameInput").value;
  var inEmail = document.getElementById("emailInput").value;
  var inSubject = document.getElementById("subjectInput").value;
  
  
  if ((inName == "") || (inEmail == "") || (inSubject == "")) 
    alert("Fill out all the required info to become an active member in the ISUD.");

  else
    alert("Thank you, " + inName + "! Expect a reply within 1-3 business days.");

}
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("photo");
  for (i=0; i<slides.length; i++) {
    slides[i].style.display="none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}
