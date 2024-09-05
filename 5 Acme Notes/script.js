const logo = document.getElementById('logo-text')
const scrollToTop = document.getElementById('scrollToTopBtn');
const menu = document.getElementById('menu')

logo.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 900) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



function toggleMenu(){
    menu.classList.toggle('hidden')

}