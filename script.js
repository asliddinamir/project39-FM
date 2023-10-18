const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
    overlay.classList.toggle('show-overlay');
});

overlay.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
    overlay.classList.toggle('show-overlay');
})
