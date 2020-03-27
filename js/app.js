/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let pageSections = document.querySelectorAll('section');
let length = pageSections.length
let navBarList = document.querySelector('#navbar__list');
let posArray=[];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
pageSections.forEach((element, index) => {
    let dataNav = element.getAttribute("data-nav");
    let navElement = document.createElement("li");
    navElement.innerHTML = `<a href="#section${index + 1}" id="sect${index +1}" class="menu__link" >${dataNav}</a>` ;
    navBarList.appendChild(navElement);
    
});





// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
navBarList.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log(evt.target);
  let targetPos = evt.target.getAttribute("href");
  console.log(targetPos);
  let el = document.querySelector(targetPos).scrollIntoView({behavior: "smooth"}) 
});
// Set sections as active

let half_window = window.innerHeight / 2;

document.addEventListener("scroll", () => {
    posArray = [];
    pageSections.forEach((ele, ind) => {
      let pos = ele.getBoundingClientRect().top;
      posArray.push(pos);
    });
    //console.log(posArray);
    let candidate = posArray.findIndex(el => el > 0);
    let candidateValue = posArray.find(el => el > 0);
    
    if (candidate != -1) {
      for (i = 0; i < length; i++) {
        if (i === candidate && candidateValue < half_window) {
          document.getElementById(`section${i + 1}`).classList.add("sect-active-class");
        } else {
          document.getElementById(`section${i + 1}`).classList.remove("sect-active-class");
        }
      }
    }
  
});


