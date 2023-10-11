const navbarBtn = document.querySelector('[data-controller="navbar-toggle"]');

navbarBtn.addEventListener('click', event => {
    toggleNavbar();    
})

const toggleNavbar = () => {
    const navbar = document.getElementById('navbar');
    const body = document.querySelector('body');

    if(navbar.classList.contains('navbar--visible')){
        navbar.classList.remove('navbar--visible');
        body.classList.remove('body--no-scroll');
    } else {
        navbar.classList.add('navbar--visible');
        body.classList.add('body--no-scroll');
    }
}

const navLinks = document.querySelectorAll('[data-nav]');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        toggleNavbar();
    })
});