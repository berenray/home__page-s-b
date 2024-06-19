function translate() {
    const select = document.querySelectorAll('select'),
        allLeng = ['ua', 'en'],
        imgLangUa = document.querySelector('.lang__ua'),
        imgLangEn = document.querySelector('.lang__en'),
        imgLangUaSide = document.querySelector('.lang__ua-side'),
        imgLangEnSide = document.querySelector('.lang__en-side'),
        screenWidth = window.screen.width;

    select.forEach(item => {
        item.addEventListener('change', ()=> {
            let lang = item.value
            location.href = window.location.pathname + '#' + lang;
            location.reload();
        })
    })

    function changeLanguage () {
        let hash = window.location.hash;
        hash = hash.substr(1);
        if(!allLeng.includes(hash)) {
            location.href = window.location.pathname + '#en';
            location.reload();
        }
        select.forEach(item => {
            item.value = hash
        })
        for (let key in langArr) {
            let elem = document.querySelector('.lang-'+ key);
            if(elem) {
                elem.innerHTML = langArr[key][hash];
                if(hash == 'ua'){
                    elem.classList.add('lang');
                    // elem.style.fontSize = '20px';
                    elem.style.fontWeight = 'bold';
                    imgLangUa.style.opacity = '1';
                    imgLangEn.style.opacity = '0';
                    imgLangUaSide.style.opacity = '1';
                    imgLangEnSide.style.opacity = '0';
                    if(elem.classList.contains('menu__btn')){
                        elem.style.fontSize = '20px';
                        if(screenWidth <= 992){
                            elem.style.fontSize = '18px';
                        }
                    }
                    if(elem.classList.contains('phone__tittle')){
                        elem.style.fontSize = '35px';
                    }
                    if(elem.classList.contains('modal-text')){
                        elem.style.fontSize = '28px'
                    }
                    if(elem.classList.contains('modal-text_first')){
                        elem.style.marginTop = '20px'
                    }
                    if(elem.classList.contains('address__tittle')){
                        elem.style.fontSize = '35px';
                    }
                    if(elem.classList.contains('about__text-desc')){
                        elem.style.fontSize = '25px';
                        if(screenWidth <= 768){
                            elem.style.fontSize = '22px'
                        }
                    }
                    if(elem.classList.contains('projects__card-descr')){
                        elem.style.fontSize = '17px';
                        if(screenWidth <= 576){
                            elem.style.fontSize = '14px'
                        }
                    }
                    if(elem.classList.contains('lang-promo')){
                        elem.style.fontSize = '25px';
                        if(screenWidth <= 768){
                            elem.style.fontSize = '20px'
                        }
                    }
                    if(elem.classList.contains('contacts__tittle') && screenWidth <= 576){
                        elem.style.fontSize = '36px'
                    }
                    if(elem.classList.contains('phone__tittle') && screenWidth <= 576){
                        elem.style.fontSize = '28px'
                    }
                    if(elem.classList.contains('address__tittle') && screenWidth <= 576){
                        elem.style.fontSize = '28px'
                    }
                }
                if(hash == 'en') {
                    imgLangUa.style.opacity = '0';
                    imgLangEn.style.opacity = '1';
                    imgLangUaSide.style.opacity = '0';
                    imgLangEnSide.style.opacity = '1';
                }
                if(elem.matches('input, textarea, select')) {
                    elem.placeholder = langArr[key][hash];
                }
            }
        }
    }

    changeLanguage();
}

module.exports = translate