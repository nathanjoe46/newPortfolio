let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}


// USE TYPED JS

$(document).ready(() => {
    let typed = new Typed('.text', {
        strings: ['am Junior Developer', 'live in Port au Prince', 'know Javascript, Python, Php, Java(a little)', 'am learning the mern stack', 'like mathematics, Intelligence Artificial, Data Science, Machine Learning', 'take pleasure in learning some really interesting stuff'],
        typeSpeed: 50,
        backSpeed: 60,
        loop : true
    });
});