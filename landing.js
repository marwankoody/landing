document.addEventListener('DOMContentLoaded', function() {

    // Sticky Header on Scroll
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
});