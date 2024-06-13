function theme() {
    const button = document.querySelector('.menu__theme'),
        body = document.querySelector('body'),
        img = document.querySelectorAll('.theme__img'),
        savedClass = localStorage.getItem('bodyClass'),
        socialInst = document.querySelector('.social__inst'),
        socialTelegram = document.querySelector('.social__telegram'),
        socialWhatsapp = document.querySelector('.social__whatsapp'),
        socialYoutube = document.querySelector('.social__youtube');

    if(savedClass) {
        document.body.classList.add(savedClass);
        iconsSaved(savedClass);
    }

    button.addEventListener('click', ()=> {
        body.classList.toggle('dark');
        img.forEach(item =>{
            item.classList.toggle('theme__img-active')
        })
        const currentClass = body.className;
        localStorage.setItem('bodyClass', currentClass);
        iconsSaved(currentClass);
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
