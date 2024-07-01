let slideIndex = 0;
let autoSlideInterval;
const slides = document.querySelectorAll('.carousel-mob-slide');
const dots = document.querySelectorAll('.dot');
const carousel = document.getElementById('carousel');


showSlides(slideIndex);


startAutoSlide();

function showSlides(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }


    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        slide.style.transform = '';
    });

   
    dots.forEach(dot => dot.classList.remove('active'));

    
    slides[slideIndex].style.display = 'block';

 
    dots[slideIndex].classList.add('active');
}

function moveSlide(step) {
    let nextSlideIndex = (slideIndex + step + slides.length) % slides.length;

    slides[slideIndex].style.transform = `translateX(${step * -100}%)`;
    slides[nextSlideIndex].style.transform = `translateX(${step * 100}%)`;
    slides[nextSlideIndex].style.display = 'block';

    setTimeout(() => {
        slides[slideIndex].style.display = 'none';
        showSlides(nextSlideIndex);
    }, 200);
}

function currentSlide(index) {
    showSlides(index - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveSlide(1);
    }, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}


slides.forEach((slide, index) => {
    const iframe = slide.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', () => {
        stopAutoSlide();
    });

    player.on('pause', () => {
        startAutoSlide();
    });

    player.on('ended', () => {
        startAutoSlide();
    });
});


let startX;
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e) => {
    if (!startX) return;

    let endX = e.touches[0].clientX;
    let diffX = startX - endX;

    if (diffX > 50) {
        moveSlide(1);
    } else if (diffX < -50) {
        moveSlide(-1);
    }

    startX = null;
});