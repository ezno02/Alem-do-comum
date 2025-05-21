window.addEventListener('wheel', function (e) {
    e.preventDefault(); // Impede scroll vertical
window.scrollBy({
    left: e.deltaY * 2,
    behavior: 'smooth'
    });
}, { passive: false });