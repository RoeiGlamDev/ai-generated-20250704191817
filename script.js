// Add event listener to window for load event
window.addEventListener('load', () => {
    // Get all elements with class fade-in
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Add event listener to window for scroll event
    window.addEventListener('scroll', () => {
        // Iterate over fade-in elements
        fadeInElements.forEach((element) => {
            // Get the top and bottom positions of the element
            const top = element.offsetTop;
            const bottom = top + element.offsetHeight;

            // Get the current scroll position
            const scrollPosition = window.scrollY;

            // Check if the element is in view
            if (scrollPosition >= top - window.innerHeight && scrollPosition < bottom) {
                // Add the animated class to the element
                element.classList.add('animated');
            }
        });
    });
});