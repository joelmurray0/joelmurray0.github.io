let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}

function show_pets() {
     document.getElementById("email").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("github").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("pets").style.display = "block";
}

function show_esports() {
     document.getElementById("email").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("github").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "block";
}

function show_GCSE() {
     document.getElementById("email").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("github").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("experience").style.display = "block";
}

function show_github() {
     document.getElementById("email").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("github").style.display = "block";
}

function show_readingRobot() {
     document.getElementById("email").style.display = "none";
     document.getElementById("github").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("readingRobot").style.display = "block";
}

function show_email() {
     document.getElementById("github").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("email").style.display = "block";
}

function copy() {
     var copyText = document.getElementById("myInput");
 
     copyText.select();
     copyText.setSelectionRange(0, 99999);
   
     navigator.clipboard.writeText(copyText.value);
   }