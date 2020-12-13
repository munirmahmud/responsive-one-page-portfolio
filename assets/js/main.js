const bodyElement = document.querySelector('body');
const menuToggle = bodyElement.querySelector('.hamburger-menu');

menuToggle.addEventListener('click', () => {
    bodyElement.classList.toggle('is-open');
});