// DOM js
"use strict";

// menu
const menuBtn = document.querySelector('.burger-menu');
menuBtn.addEventListener('click', e => {
    // add open class to the hamburger and app-drawer
    e.target.closest('a').classList.toggle('open'); // use .closest to get the closest parent 'a' tag
    document.querySelector('.app-drawer').classList.toggle('open');
    
    // play sound on menu open
    const audio = document.querySelector('.sound-menu'); // get sound
    e.target.closest('a').classList.toggle('playing'); // add class
    audio.currentTime = 0;
    audio.play();
})