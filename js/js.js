function toggleNav() {
    var navToggle = document.getElementById('nav-toggle');
    var nav = document.querySelector('nav');

    navToggle.classList.toggle('open');
    nav.classList.toggle('open');
}