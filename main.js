const toogleBtn = document.querySelector('.toogleBtn');
const menu = document.querySelector('.naviMenu');
const icons = document.querySelector('.naviM2');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    });