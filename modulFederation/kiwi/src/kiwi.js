import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';

import axios from 'axios'  
import React from 'react';

console.log(axios,React)

const heading = new Heading();
heading.render("kiwi");
const kiwiImage = new KiwiImage();
kiwiImage.render();

import('HelloWorldApp/HelloWordlButton').then(res=>{
    const HelloWordlButton = res.default
    new HelloWordlButton().render()
})