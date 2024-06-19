function theme() {
    const button = document.querySelectorAll('.menu__theme'),
        body = document.querySelector('body'),
        img = document.querySelectorAll('.theme__img'),
        savedClass = localStorage.getItem('bodyClass'),
        socialInst = document.querySelector('.social__inst'),
        socialTelegram = document.querySelector('.social__telegram'),
        socialWhatsapp = document.querySelector('.social__whatsapp'),
        socialYoutube = document.querySelector('.social__youtube'),
        { closeMenu } = require('./menu');

    if(savedClass) {
        document.body.classList.add(savedClass);
        iconsSaved(savedClass);
    }

    button.forEach(item => {
        item.addEventListener('click', ()=> {
            body.classList.toggle('dark');
            img.forEach(item =>{
                item.classList.toggle('theme__img-active')
            })
            const currentClass = body.className;
            localStorage.setItem('bodyClass', currentClass);
            iconsSaved(currentClass);
            function closeMenu () {
                const menu = document.querySelector('.menu-side'),
                    hamburger = document.querySelector('.hamburger'),
                    close = document.querySelector('.menu__close'),
                    overlay = document.querySelector('.menu__overlay');
                menu.classList.remove('active');
                hamburger.classList.add('hamburger-active');
                close.classList.remove('menu__close-active');
                document.body.style.overflow = '';
                overlay.style.display = 'none'
            }
            closeMenu();
        })
    })

    function iconsSaved(theme) {
        if(theme == 'dark') {
            socialInst.src = './icons/inst.png';
            socialTelegram.src = './icons/telegram.png';
            socialWhatsapp.src = './icons/whatsapp.png';
            socialYoutube.src = './icons/youtube.png';
        } else{
            socialInst.src = './icons/inst.svg';
            socialTelegram.src = './icons/telegram.svg';
            socialWhatsapp.src = './icons/whatsapp.svg';
            socialYoutube.src = './icons/youtube.svg';
        }
    }   
}

module.exports = theme
