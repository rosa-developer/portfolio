// Smooth Scrolling for Navigation
// This script enables smooth scrolling for navigation links.
// It prevents the default behavior of the link and scrolls smoothly to the target element.

// Check if the user prefers reduced motion
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const anchors = document.querySelectorAll('.navbar ul li a');
    const targets = {};

    // Cache the target elements
    anchors.forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href) {
            targets[href] = document.querySelector(href);
        }
    });

    // Add click event listeners to the anchors
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = targets[this.getAttribute('href')];
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error('Target element not found:', this.getAttribute('href'));
            }
        });
    });
}
