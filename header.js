const toggleBtn = document.querySelector('.header_toggleBtn');
const menu = document.querySelector('.headerMenu');
const links = document.querySelector('.headerLinks');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    links.classList.toggle('active');
})