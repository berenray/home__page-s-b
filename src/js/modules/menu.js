function menu () {
    const menu = document.querySelector('.menu-side'),
        hamburger = document.querySelector('.hamburger'),
        close = document.querySelector('.menu__close'),
        overlay = document.querySelector('.menu__overlay');

    function closeMenu () {
        menu.classList.remove('active');
        hamburger.classList.add('hamburger-active');
        close.classList.remove('menu__close-active');
        document.body.style.overflow = '';
        overlay.style.display = 'none'
    }

    function openMenu () {
        menu.classList.add('active');
        hamburger.classList.remove('hamburger-active');
        close.classList.add('menu__close-active');
        document.body.style.overflow = 'hidden';
        overlay.style.display = 'block';
    }

    close.addEventListener('click', ()=> {
        closeMenu();
    })

    hamburger.addEventListener('click', ()=> {
       openMenu(); 
    });

    document.addEventListener('keydown', (e)=> {
        if(e.code == 'Escape' && menu.classList.contains('active') && overlay.style.display == 'block') {
            e.preventDefault();
            closeMenu();
        }
    })

    overlay.addEventListener('click', (e)=> {
        if(e.target == overlay) {
            closeMenu();
        }
    })
}

module.exports = menu