const navbarBtn = document.querySelector('[data-controller="navbar-toggle"]');
navbarBtn.addEventListener('click', () => toggleNavbar())

const navLinks = document.querySelectorAll('[data-nav]');
navLinks.forEach(link => {
    link.addEventListener('click', () => toggleNavbar())
});

const toggleNavbar = () => {
    const navbar = document.getElementById('navbar');
    const body = document.querySelector('body');
    const menuIcon = document.getElementById('burger-icon');

    navbar.classList.toggle('navbar--visible');
    body.classList.toggle('body--no-scroll');
    menuIcon.classList.toggle('burger__icon--open');
}

