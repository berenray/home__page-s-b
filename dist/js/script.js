'use strict';

window.addEventListener('DOMContentLoaded', ()=> {
    const menu = require('./modules/menu'),
        slider = require('./modules/slider'),
        tabs = require('./modules/tabs'),
        animate = require('./modules/animate'),
        theme = require('./modules/theme'),
        translate = require('./modules/translate'),
        mail = require('./modules/mail'),
        news = require('./modules/news');

    mail();
    theme();
    slider();
    tabs();
    animate();
    translate();
    menu();
    news();
})