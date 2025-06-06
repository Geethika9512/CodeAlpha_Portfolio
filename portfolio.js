const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
};
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
faders.forEach(fader => appearOnScroll.observe(fader));

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
function showSlides() {
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slideIndex = (slideIndex + 1) % slides.length;
  if (slides.length) slides[slideIndex].style.display = "block";
  setTimeout(showSlides, 3000);
}
showSlides();
