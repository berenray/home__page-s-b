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

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((module) => {

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
    // const theme = require('./modules/theme'),
    //     translate = require('./modules/translate'),
    const menu = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js"),
        tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
        animate = __webpack_require__(/*! ./modules/animate */ "./src/js/modules/animate.js");

    // theme();
    slider();
    tabs();
    animate();
    // translate();
    menu();
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map