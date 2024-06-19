/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/animate.js":
/*!***********************************!*\
  !*** ./src/js/modules/animate.js ***!
  \***********************************/
/***/ ((module) => {

function animate () {
    new WOW().init();
}

module.exports = animate

/***/ }),

/***/ "./src/js/modules/mail.js":
/*!********************************!*\
  !*** ./src/js/modules/mail.js ***!
  \********************************/
/***/ ((module) => {

function mail () {
    const mailPath = 'mail.php',
    modal = document.querySelector('.modal'),
    modalDialog = document.querySelector('.modal__dialog'),
    modalClose = document.querySelector('.modal__close svg');

    function opanThanksModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        modalDialog.classList.add('fade-modal');
        setTimeout (()=> {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 1500)
    }

    function closeModalThanks () {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.uniForm').forEach( (e) => {

    e.addEventListener('submit', function(e) {

        let th = this,
            params = new FormData(this),
            request = new XMLHttpRequest();

        request.open('POST', mailPath, true)
        request.send(params)

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                opanThanksModal();
                th.reset();
                console.log('hi');
            }
        }
        e.preventDefault();

        });

        modal.addEventListener('click', (event)=> {
            if(event.target == modal || event.target == modalClose) {
                closeModalThanks();
            }
        });

        document.addEventListener('keydown', (e)=> {
            if(e.code === 'Escape' && modal.style.display == 'flex') {
                closeModalThanks();
            }
        })

        // modalClose.addEventListener('click', ()=> {
        //     closeModalThanks();
        // })

    });
}

module.exports = mail

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((module) => {

function menu () {
    const menu = document.querySelector('.menu-side'),
        hamburger = document.querySelector('.hamburger'),
        close = document.querySelector('.menu__close'),
        overlay = document.querySelector('.menu__overlay'),
        btn = document.querySelectorAll('.menu__btn-side');

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

    btn.forEach(item => {
        item.addEventListener('click', ()=> {
            closeMenu();
        })
    })
}
module.exports =  menu

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((module) => {

function slider() {
    const slides = document.querySelectorAll('.slider__item');

    let index = 0;

    const interval = setInterval(()=> {
        slides[index].classList.remove('slider__item-active');
        index++;
        if(index >= slides.length){
            index = 0
        }
        slides[index].classList.add('slider__item-active');
    }, 40000)
}

module.exports = slider

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((module) => {

function tabs () {
    const tabs = document.querySelectorAll('.projects__filter-text'),
        tabsContent = document.querySelectorAll('.projects__filter-wrapper'),
        tabsCardFirst = document.querySelectorAll('.projects__card-first'),
        tabsCardSecond = document.querySelectorAll('.projects__card-second'),
        tabsCardThird = document.querySelectorAll('.projects__card-third'),
        tabsParent = document.querySelector('.projects__btns');

    function hideTabs () {
        tabs.forEach(item => {
            item.classList.remove('projects__filter-text-active')
        })
        tabsContent.forEach(item => {
            item.classList.remove('projects__filter-wrapper-active');
        })
    }

    function showTabs (i = 0) {
        tabs[i].classList.add('projects__filter-text-active');
        tabsContent[i].classList.add('projects__filter-wrapper-active');
    }

    hideTabs();
    showTabs(0);

    // Animation functions

        // hide

    function hideTabsAnimationFirst() {
        tabsCardSecond.forEach(item => {
            item.classList.remove('opacity-1', 'animate__animated','animate__fadeInUp');
            item.classList.add('opacity');
        })
        tabsCardThird.forEach(item => {
            item.classList.remove('opacity-1', 'animate__animated','animate__fadeInUp');
            item.classList.add('opacity');
        })
    }
    
    function hideTabsAnimationSecond() {
        tabsCardFirst.forEach(item => {
            item.classList.remove('opacity-1', 'animate__animated','animate__fadeInUp');
            item.classList.add('opacity');
            const last = document.querySelector('projects__card-animation')
            if(last){
                last.classList.remove('wow')
            }
        })
        tabsCardThird.forEach(item => {
            item.classList.remove('opacity-1', 'animate__animated','animate__fadeInUp');
            item.classList.add('opacity');
        })
    }

    function hideTabsAnimationThird() {
        tabsCardFirst.forEach(item => {
            item.classList.remove('opacity-1', 'animate__animated','animate__fadeInUp');
            item.classList.add('opacity');
        })
        tabsCardSecond.forEach(item => {
            item.classList.remove('opacity-1', 'animate__animated','animate__fadeInUp');
            item.classList.add('opacity');
        })
    }

        // Show

    function tabsAnimFirst () {
        tabsCardFirst.forEach((item, index) => {
                    item.classList.add('animate__animated','animate__fadeInUp', 'opacity-1');
                    item.classList.remove('opacity');
        })
    }
    function tabsAnimSecond () {
        tabsCardSecond.forEach((item, index) => {
            setTimeout(() => {
                    item.classList.add('animate__animated','animate__fadeInUp', 'opacity-1');
                    item.classList.remove('opacity');
            }, index * 100)
        })
    }

    function tabsAnimThird () {
        tabsCardThird.forEach((item, index) => {
            setTimeout(() => {
                    item.classList.add('animate__animated','animate__fadeInUp', 'opacity-1');
                    item.classList.remove('opacity');
            }, index * 100)
        })
    }


    tabsParent.addEventListener('click', (e) =>{
        e.preventDefault();
        const target = e.target;
        if(target && target.classList.contains('projects__filter-text')){
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabs();
                    showTabs(i);
                    if(i == 0) {
                        tabsAnimFirst();
                        hideTabsAnimationFirst();
                    }
                    if(i == 1) {
                        tabsAnimSecond();
                        hideTabsAnimationSecond();
                    }
                    if(i == 2) {
                        tabsAnimThird();
                        hideTabsAnimationThird();
                    }
                }
            })
        }
    })
}

module.exports = tabs

/***/ }),

/***/ "./src/js/modules/theme.js":
/*!*********************************!*\
  !*** ./src/js/modules/theme.js ***!
  \*********************************/
/***/ ((module) => {

function theme() {
    const button = document.querySelectorAll('.menu__theme'),
        body = document.querySelector('body'),
        img = document.querySelectorAll('.theme__img'),
        savedClass = localStorage.getItem('bodyClass'),
        socialInst = document.querySelector('.social__inst'),
        socialTelegram = document.querySelector('.social__telegram'),
        socialWhatsapp = document.querySelector('.social__whatsapp'),
        socialYoutube = document.querySelector('.social__youtube'),
        hamburger = document.querySelectorAll('.hamburger span'),
        close = document.querySelector('.menu__close svg path'),
        modal = document.querySelector('.modal');

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
            modal.classList.toggle('modal-active')
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
                overlay.style.display = 'none';
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
            hamburger.forEach(item => {
                item.style.backgroundColor = 'black';
            });
            close.style.fill = 'black';
        } else{
            socialInst.src = './icons/inst.svg';
            socialTelegram.src = './icons/telegram.svg';
            socialWhatsapp.src = './icons/whatsapp.svg';
            socialYoutube.src = './icons/youtube.svg';
            hamburger.forEach(item => {
                item.style.backgroundColor = 'white';
            });
            close.style.fill = 'white';
        }
    }   
}

module.exports = theme


/***/ }),

/***/ "./src/js/modules/translate.js":
/*!*************************************!*\
  !*** ./src/js/modules/translate.js ***!
  \*************************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/


window.addEventListener('DOMContentLoaded', ()=> {
    const menu = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js"),
        tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
        animate = __webpack_require__(/*! ./modules/animate */ "./src/js/modules/animate.js"),
        theme = __webpack_require__(/*! ./modules/theme */ "./src/js/modules/theme.js"),
        translate = __webpack_require__(/*! ./modules/translate */ "./src/js/modules/translate.js"),
        mail = __webpack_require__(/*! ./modules/mail */ "./src/js/modules/mail.js");

    mail();
    theme();
    slider();
    tabs();
    animate();
    translate();
    menu();
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map