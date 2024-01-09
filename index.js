document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  let slideIndex = 0;

  function showSlide(index) {
    const totalSlides = document.querySelectorAll(".slide").length;

    if (index >= totalSlides) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = totalSlides - 1;
    }

    const translationValue = -100 * slideIndex + "%";
    slider.style.transform = "translateX(" + translationValue + ")";
  }

  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
  }

  // Configurar botões de navegação (próximo e anterior)
  document.querySelector(".slider-container").addEventListener("click", function(event) {
    if (event.target.classList.contains("next-btn")) {
      nextSlide();
    } else if (event.target.classList.contains("prev-btn")) {
      prevSlide();
    }
  });

  // Configurar navegação automática (opcional)
  setInterval(nextSlide, 5000); // Muda de slide a cada 5 segundos (ajuste conforme necessário)
});
