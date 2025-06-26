document.addEventListener('DOMContentLoaded', function() {

    // 1. Sticky Header on Scroll
    const header = document.getElementById('header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check in case page is reloaded scrolled down
        handleScroll();
    }

    // 2. Fade-in animation on scroll for elements with the .fade-in class
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    if (fadeInElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // When the element is in view
                if (entry.isIntersecting) {
                    // Add a class to trigger the animation
                    entry.target.classList.add('is-visible');
                    // Stop observing the element so the animation doesn't re-trigger
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Observe each .fade-in element
        fadeInElements.forEach(element => {
            observer.observe(element);
        });
    }


    
    
});




const serviceItems = document.querySelectorAll('.service__item');
serviceItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        serviceItems.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });

});
