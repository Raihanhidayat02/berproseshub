let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav');

window.onscroll = () => {
    sections.forEach(sec =>) {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(getAttribute('id'));

        if(top >= offset && top < offset + height){
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add
                ('active')
            })
        }
    }
}



menuIcon.onclik = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}        
        