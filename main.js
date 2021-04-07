// Declare all Global Variable
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelector('nav-links');

const mobileMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

hamburger.addEventListener('click', mobileMenu);
