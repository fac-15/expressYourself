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



// 
const langButtons = Array.from(document.querySelectorAll('.language-search .button-submit'));
const list = document.getElementById("profile")



const sortLang = e => {
    e.preventDefault();
    // console.log(e.target.value);
    const buttonName = e.target.value.toLowerCase();
    console.log(buttonName);

    const allPeeps = [];
    fetch("/search-user")
        .then(res => res.json())
        .then(data => allPeeps.push(...data))

        // .then(function(myJson){
        //     console.log(JSON.stringify(myJson))
        // })
    console.log(allPeeps);
    
    
    allPeeps.sort((a, b) => {console.log(return a.buttonName - b.buttonName});
    console.log(allPeeps)
}


langButtons.forEach(btn => btn.addEventListener('click', sortLang));

