function translate() {
    const select = document.querySelector('select'),
        allLeng = ['ua', 'en'],
        imgLangUa = document.querySelector('.lang__ua'),
        imgLangEn = document.querySelector('.lang__en');

    select.addEventListener('change', ()=> {
        let lang = select.value
        location.href = window.location.pathname + '#' + lang;
        location.reload();
    })

    function changeLanguage () {
        let hash = window.location.hash;
        hash = hash.substr(1);
        if(!allLeng.includes(hash)) {
            location.href = window.location.pathname + '#en';
            location.reload();
        }
        select.value = hash;
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
                    if(elem.classList.contains('menu__btn')){
                        elem.style.fontSize = '20px';
                    }
                    if(elem.classList.contains('phone__tittle')){
                        elem.style.fontSize = '35px';
                    }
                    if(elem.classList.contains('address__tittle')){
                        elem.style.fontSize = '35px';
                    }
                    if(elem.classList.contains('about__text-desc')){
                        elem.style.fontSize = '25px';
                    }
                    if(elem.classList.contains('projects__card-descr')){
                        elem.style.fontSize = '17px'
                    }
                    if(elem.classList.contains('promo__text')){
                        elem.style.fontSize = '25px';
                    }
                }
                if(hash == 'en') {
                    imgLangUa.style.opacity = '0';
                    imgLangEn.style.opacity = '1';
                }
                if(elem.matches('input, textarea, select')) {
                    elem.placeholder = langArr[key][hash];
                }
            }
        }
    }

    changeLanguage()
}

module.exports = translate