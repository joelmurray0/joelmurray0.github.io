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
     document.getElementById("website").style.display = "none";
     document.getElementById("subjects").style.display = "none";
     document.getElementById("email").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("github").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("pets").style.display = "block";
     document.getElementById("mastermind").style.display = "none";
}

function show_mastermind() {
     document.getElementById("website").style.display = "none";
     document.getElementById("subjects").style.display = "none";
     document.getElementById("email").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("github").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("mastermind").style.display = "block";
}

function show_esports() {
     document.getElementById("website").style.display = "none";
     document.getElementById("subjects").style.display = "none";
     document.getElementById("email").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("github").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "block";
     document.getElementById("mastermind").style.display = "none";
}

function show_GCSE() {
     document.getElementById("website").style.display = "none";
     document.getElementById("subjects").style.display = "none";
     document.getElementById("email").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("github").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("experience").style.display = "block";
     document.getElementById("mastermind").style.display = "none";
}

function show_github() {
     document.getElementById("website").style.display = "none";
     document.getElementById("subjects").style.display = "none";
     document.getElementById("email").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("github").style.display = "block";
     document.getElementById("mastermind").style.display = "none";
}

function show_readingRobot() {
     document.getElementById("website").style.display = "none";
     document.getElementById("subjects").style.display = "none";
     document.getElementById("email").style.display = "none";
     document.getElementById("github").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("readingRobot").style.display = "block";
     document.getElementById("mastermind").style.display = "none";
}

function show_email() {
     document.getElementById("website").style.display = "none";
     document.getElementById("subjects").style.display = "none";
     document.getElementById("github").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("email").style.display = "block";
     document.getElementById("mastermind").style.display = "none";
}

function show_me() {
     document.getElementById("website").style.display = "none";
     document.getElementById("github").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("email").style.display = "none";
     document.getElementById("subjects").style.display = "block";
     document.getElementById("mastermind").style.display = "none";
}

function show_web() {
     document.getElementById("github").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("email").style.display = "none";
     document.getElementById("subjects").style.display = "none";
     document.getElementById("website").style.display = "block";
     document.getElementById("mastermind").style.display = "none";
}

function show_subjects() {
     document.getElementById("github").style.display = "none";
     document.getElementById("pets").style.display = "none";
     document.getElementById("esports").style.display = "none";
     document.getElementById("experience").style.display = "none";
     document.getElementById("readingRobot").style.display = "none";
     document.getElementById("email").style.display = "none";
     document.getElementById("website").style.display = "none";
     document.getElementById("subjects").style.display = "block";
     document.getElementById("mastermind").style.display = "none";
}

function copy() {
     var copyText = document.getElementById("myInput");
 
     copyText.select();
     copyText.setSelectionRange(0, 99999);
   
     navigator.clipboard.writeText(copyText.value);
   }