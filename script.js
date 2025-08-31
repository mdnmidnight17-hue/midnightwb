document.querySelectorAll(".project-card").forEach(card => {
  const vid = card.querySelector("video");

  if (vid) {
    vid.pause();
    card.addEventListener("mouseenter", () => vid.play());
    card.addEventListener("mouseleave", () => vid.pause());
  }
});
const fadeItems = document.querySelectorAll(".fade-delay");
const fadeproject = document.querySelectorAll(".fade-delay-project");
let baseDelay = 0; 
let step = 100;    

fadeItems.forEach((el, index) => {
  el.setAttribute("data-aos", "fade-up"); 
  el.setAttribute("data-aos-duration", "1000"); 
  el.setAttribute("data-aos-delay", baseDelay + index * step); 
});
    
fadeproject.forEach((el, index) => {
  el.setAttribute("data-aos", "fade-up"); 
  el.setAttribute("data-aos-duration", "1000"); 
  el.setAttribute("data-aos-delay", baseDelay + index * step); 
});

AOS.init();