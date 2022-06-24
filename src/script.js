const btn = document.querySelector('#book-btn');
let nav = document.querySelector('nav');


// adding a the change of the navbar background on scroll
window.addEventListener('scroll', function() {
    if(window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
    }else {
        nav.classList.remove('bg-dark','shadow');
    }
})


// script to make the hero button animation work
btn.onmousemove = function(e) {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
};
