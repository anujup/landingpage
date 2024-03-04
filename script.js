var links = document.querySelector('.links'); 
var btn = document.querySelector('i');
var media = window.matchMedia("(max-width: 600px)");
var menu = document.querySelector(".menu")

btn.addEventListener("click", function() {
    if (btn.className == "ri-menu-3-line ri-2x") {
        links.style.display = "flex";
        btn.className = "ri-close-line ri-2x";
    } else{
            links.style.display = "none";
            btn.className = "ri-menu-3-line ri-2x";
    }
    
})

media.addEventListener('change', function() {
    if (media.matches) {
        links.style.display = "none"
        btn.className = "ri-menu-3-line ri-2x";
    } else {
        links.style.display = "flex"
    }
})


// Auto slieer 
let slideIndex = 0;


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  let sliderNav = document.querySelector(".slider-nav");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("selected-slider", "");
  }

  sliderNav.addEventListener("click", function(details) {
      let ind = details.target.id.at(-1)
      slideIndex = ind-1
  })
    

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " selected-slider";

  let myVar = setTimeout(showSlides, 3000); // Change image every 2 seconds
}
 
showSlides();


