/* slides */

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
  
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
  
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
  
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
  
      setTimeout(showSlides, 6000); // Muda o slide a cada 6 segundos
    }
  });
  