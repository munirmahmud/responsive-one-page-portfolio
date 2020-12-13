const bodyElement = document.querySelector('body');
const menuToggle = bodyElement.querySelector('.hamburger-menu');
const navLists = bodyElement.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    bodyElement.classList.toggle('is-open');
});

navLists.addEventListener('click', e => {
    let clickedEl = e.target;

    if(clickedEl.classList[0] === 'nav-link') {
        bodyElement.classList.remove('is-open');
    }
});

//Add Eventlistener to the window object to close navigation
window.addEventListener('click', e => {
    let clickedEl = e.target;

    if(clickedEl.matches('.main')) {
        bodyElement.classList.remove('is-open');
    }
});