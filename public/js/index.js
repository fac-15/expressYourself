// DOM js
"use strict";

// menu
const menuBtn = document.querySelector(".burger-menu");
menuBtn.addEventListener("click", e => {
  // add open class to the hamburger and app-drawer
  e.target.closest("a").classList.toggle("open"); // use .closest to get the closest parent 'a' tag
  document.querySelector(".app-drawer").classList.toggle("open");

  // play sound on menu open
  const audio = document.querySelector(".sound-menu"); // get sound
  audio.currentTime = 0; // start at 0
  audio.play();
});

// fetch data
// - can't be inside below function
const allPeeps = [];
fetch("/search-user")
  .then(res => res.json())
  .then(data => allPeeps.push(...data));

// sort by language
// - sort function
const sortLang = lang => {
  // would like to be able to toggle order without a global variable:
  // https://stackoverflow.com/questions/44661710/how-to-toggle-sort-in-javascript
  allPeeps.sort((a, b) => {
    const personA = a[lang];
    const personB = b[lang];
    // order ascending
    if (personA < personB) {
      return 1;
    }
    if (personA > personB) {
      return -1;
    }
    return 0;
  });
  return allPeeps;
};

// output html
// - mimicry of stuff in handlebars
const sortList = e => {
  e.preventDefault();
  const lang = e.target.value.toLowerCase();
  const sorted = sortLang(lang);
  const numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five"
  };

  const html = sorted
    .map(item => {
      return `
        <li class="cohort-member">
            <h3 class="name">${item.name}</h3>
            <article class="bio">${item.bio}</article>
            <article class="skills">
                <span>Skills:</span>

                <div class="html">
                    <span>HTML level:</span>
                    <div class=${numbers[item.html]}></div>
                </div>

                <div class="css">
                    <span>CSS level:</span>
                    <div class=${numbers[item.css]}></div>
                </div>

                <div class="js">
                    <span>JS level:</span>
                    <div class=${numbers[item.js]}></div>
                </div>

                <div class="sql">
                    <span>SQL level:</span>
                    <div class=${numbers[item.sql]}></div>
                </div>

                <div class="node">
                    <span>NODE level:</span>
                    <div class=${numbers[item.node]}></div>
                </div>
            </article>
        </li>
        `;
    })
    .join("");

  const ul = document.querySelector(".cohort-list");
  ul.innerHTML = html;
};

// - get buttons
const langButtons = Array.from(
  document.querySelectorAll(".language-search .button-submit")
);
// - attach event listener and function
langButtons.forEach(btn => btn.addEventListener("click", sortList));

// name search

// const allPeeps = [];
// fetch("/search-user")
//   .then(res => res.json())
//   .then(data => allPeeps.push(...data));

const nameSearch = document.getElementById("search_btn");

nameSearch.addEventListener("click", e => {
  e.preventDefault();
  const textInput = document.getElementById("text-input").value;

  //   alert("allpeeps", allPeeps);

  //   console.log("you clicked the search button");
  console.log(textInput);
  //   ("We will do this another time...");
});
