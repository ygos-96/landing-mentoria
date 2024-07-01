function handleScroll() {
    const whatsappButton = document.querySelector('.btn-whats');
    if (window.innerWidth < 500) {
        if (window.scrollY > 0) {
            whatsappButton.style.opacity = '1'; // Show button with transition
        } else {
            whatsappButton.style.opacity = '0'; // Hide button with transition
        }
    } else {
        whatsappButton.style.opacity = '1'; // Always show button on larger screens
    }
}

// Execute on scroll
document.addEventListener('scroll', handleScroll);

// Execute on window resize
window.addEventListener('resize', handleScroll);

// Initial check
handleScroll();
