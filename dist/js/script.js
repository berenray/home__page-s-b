'use strict';

window.addEventListener('DOMContentLoaded', ()=> {
    const theme = require('./modules/theme'),
        slider = require('./modules/slider'),
        tabs = require('./modules/tabs'),
        animate = require('./modules/animate'),
        translate = require('./modules/translate');

    theme();
    slider();
    tabs();
    animate();
    translate();
})