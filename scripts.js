const cert = document.getElementById('pdf-cert')

function resizeIframe () {
    const containerWidth = document.querySelector('.pdf-container').offsetWidth;
    const containerHeight = document.querySelector('pdf-container').offsetHeight;

    pdfFrame.style.width = `${containerWidth}px`;
    pdfFrame.style.height = `${containerHeight}px`;
}

window.addEventListener('resize', resizeIframe);
window.addEventListener('DOMContentLoaded', resizeIframe);