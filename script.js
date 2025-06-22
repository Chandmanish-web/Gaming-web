// Theme toggle
    const toggleBtn = document.getElementById('toggle-theme');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      toggleBtn.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
    });

    // Slider
    const sliderTrack = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let index = 0;
    const totalSlides = slides.length;

    function updateSlider() {
      sliderTrack.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % totalSlides;
      updateSlider();
    });

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + totalSlides) % totalSlides;
      updateSlider();
    });

    setInterval(() => {
      index = (index + 1) % totalSlides;
      updateSlider();
    }, 5000);