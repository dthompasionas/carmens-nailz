const btn = document.querySelector('#book-btn');
let nav = document.querySelector('nav');
let iconUp = document.querySelector('.totop');
let toggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.navbar-collapse');







// adding a the change of the navbar background on scroll
window.addEventListener('scroll', function() {
    if(window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'bg-gradient', 'shadow');
        iconUp.classList.remove('d-none');
    }else {
        nav.classList.remove('bg-dark', 'bg-gradient', 'shadow');
        iconUp.classList.add('d-none');
    }
})

// adding a different background color to the background when mobile menu clicked
toggler.addEventListener('click', function() {

    nav.classList.add('bg-dark', 'bg-gradient', 'shadow'); 

    if(toggler.classList.contains('collapsed') && window.pageYOffset <= 100) {
        nav.classList.remove('bg-dark', 'bg-gradient', 'shadow');
    }
    
})


// script to make the hero button animation work
btn.onmousemove = function(e) {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
};
