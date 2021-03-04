
// Меню гамбургер

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeElem.addEventListener('click', () =>{
    menu.classList.remove('active');
    document.body.style.overflow = '';
});

menu.addEventListener('click', (e) => {
    if (e.target === menu) {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
});


// Скилы 
const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');


counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

