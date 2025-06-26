document.addEventListener('DOMContentLoaded', function () {
    // Sticky Header on Scroll
    const header = document.getElementById('header');
    if (header) {
        const handleScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    // Fade-in animation on scroll
    const fadeInElements = document.querySelectorAll('.fade-in');
    if (fadeInElements.length) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        fadeInElements.forEach(element => observer.observe(element));
    }

    // Service item hover effect
    const serviceItems = document.querySelectorAll('.service__item');
    if (serviceItems.length) {
        serviceItems.forEach(item => {
            item.addEventListener('mouseenter', function () {
                serviceItems.forEach(el => el.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // WhatsApp tooltip
    const whatsappBtn = document.getElementById('whatsapp-chat-wrapper');
    const tooltip = document.getElementById('whatsapp-tooltip');
    if (whatsappBtn && tooltip) {
        tooltip.classList.remove('hide');
        const hideTooltip = () => tooltip.classList.add('hide');
        setTimeout(hideTooltip, 4000);
        whatsappBtn.addEventListener('click', hideTooltip);
    }
});