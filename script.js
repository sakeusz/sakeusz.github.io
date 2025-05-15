document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let current = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
  }

  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  showSlide(current);
  startAutoSlide();
});
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".creator-content");
  if (content) {
    setTimeout(() => {
      content.classList.add("visible");
    }, 300); // Można zmienić opóźnienie np. 0.5 sekundy
  }
});


