// The code is from https://www.w3schools.com/howto/howto_js_slideshow.asp
try {
	carousel();
} catch (error) {
  console.error(error);
}
var myIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);    
}
////////////////////////////////////////////
//The code is from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
window.onscroll = function() {stickynavbar()};

var navbar = document.getElementById("site-navigation");
var sticky = navbar.offsetTop;

function stickynavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-nav")
  } else {
    navbar.classList.remove("sticky-nav");
  }
}
////////////////////////////////////////////