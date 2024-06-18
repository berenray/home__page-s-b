'use strict';

window.addEventListener('DOMContentLoaded', ()=> {
    // const theme = require('./modules/theme'),
    //     translate = require('./modules/translate'),
    const menu = require('./modules/menu'),
        slider = require('./modules/slider'),
        tabs = require('./modules/tabs'),
        animate = require('./modules/animate');

    // theme();
    slider();
    tabs();
    animate();
    // translate();
    menu();
})