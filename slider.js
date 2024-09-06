let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === slideIndex) {
            dot.classList.add('active');
        }
    });
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

document.querySelector('.next-btn').addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});


showSlide(slideIndex);
