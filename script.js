document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible if we only want it to animate once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Handle logo image load error gracefully
    const logoImg = document.getElementById('logo-img');
    if (logoImg) {
        logoImg.addEventListener('error', function() {
            // Fallback is already defined in HTML onerror, but we can add an extra safety layer here
            console.log("Logo original não encontrada, carregando fallback.");
        });
    }
});
