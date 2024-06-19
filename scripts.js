window.addEventListener('DOMContentLoaded', () => {
    function resizeIframes() {
        const iframes = document.querySelectorAll('.pdf-cert');
        
        iframes.forEach(iframe => {
            // Set the height of each iframe to 60% of the window height
            iframe.style.height = `${window.innerHeight * 0.6}px`;
        });
    }

    resizeIframes();

    window.addEventListener('resize', resizeIframes);
});