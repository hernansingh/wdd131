document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('open');
    nav.classList.toggle('open');
});