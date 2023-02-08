import { HomePage } from "./Home";
import { ContactPage } from "./Contact";
import { MenuPage } from "./Menu";
import { createNavbar, createContentDiv, createFooter, clearContent } from "./pageLoad";

const render = () => {

const homePage = document.createElement('li');
const menuPage = document.createElement('li');
const contactPage = document.createElement('li');

createContentDiv();
/*Create navbar*/

createNavbar(homePage, menuPage, contactPage);
/*Create navbar*/
createFooter();
HomePage();
homePage.addEventListener('click', () => {
    if(!homePage.classList.contains('active')){ 
    clearContent();
    homePage.classList.add('active');
    menuPage.classList.remove('active');
    contactPage.classList.remove('active');
    HomePage();
  
    }
})
menuPage.addEventListener('click', () => {
    if(!menuPage.classList.contains('active')){
    clearContent();
    menuPage.classList.add('active');
    homePage.classList.remove('active');
    contactPage.classList.remove('active');
    MenuPage();
    }
    
})
contactPage.addEventListener('click', () => {
    if(!contactPage.classList.contains('active')){
    clearContent();
    contactPage.classList.add('active');
    menuPage.classList.remove('active');
    homePage.classList.remove('active');
    ContactPage();
    }
   
})
const nav = document.querySelector("nav");
const menuItems = document.querySelectorAll(".menuItem");
const hamburgerMenu= document.querySelector(".hamburger-menu");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const hamburgerNavTitle = document.querySelector('.hamburger-nav-title');

function toggleMenu() {
  if (nav.classList.contains("showMenu")) {
    nav.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    hamburgerNavTitle.style.display = "block";
  } else {
    nav.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    hamburgerNavTitle.style.display = "none";
  }
}

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )

hamburgerMenu.addEventListener("click", toggleMenu);

};

render();






