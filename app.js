const navbarBtn = document.querySelector('[data-controller="navbar-toggle"]');
navbarBtn.addEventListener('click', () => toggleNavbar())

const navLinks = document.querySelectorAll('[data-nav]');
navLinks.forEach(link => {
    link.addEventListener('click', () => toggleNavbar())
});

const toggleNavbar = () => {
    if(window.screen.availWidth > 639)
        return;

    const navbar = document.getElementById('navbar');
    const headerLink = document.getElementById('header-link');
    const body = document.querySelector('body');
    const menuIcon = document.getElementById('burger-icon');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');

    main.classList.toggle('main--invisible');
    footer.classList.toggle('footer--invisible');
    body.classList.toggle('body--no-scroll');

    navbar.classList.toggle('navbar--visible');
    headerLink.classList.toggle('header--accent');
    menuIcon.classList.toggle('burger__icon--open');
}

