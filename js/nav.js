const hamburger = document.querySelector('.hamburger');
const topnav = document.querySelector('.topnav');

hamburger.addEventListener('click', () => {
    topnav.classList.toggle('open');
    hamburger.classList.toggle('open');
    const isOpen = topnav.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
});