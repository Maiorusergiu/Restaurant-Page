import { HomePage } from "./Home";
import { ContactPage } from "./Contact";
import { MenuPage } from "./Menu";
import { createNavbar, createContentDiv, createFooter, clearContent } from "./pageLoad";
import { addClass, removeClass } from "./HelperMethods";

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
    addClass(homePage, "active");
    removeClass(menuPage, 'active');
    removeClass(contactPage, 'active');
    HomePage();
  
    }
})
menuPage.addEventListener('click', () => {
    if(!menuPage.classList.contains('active')){
    clearContent();
    removeClass(homePage, "active");
    addClass(menuPage, 'active');
    removeClass(contactPage, 'active');
    MenuPage();
    }
    
})
contactPage.addEventListener('click', () => {
    if(!contactPage.classList.contains('active')){
    clearContent();
    contactPage.classList.add('active');
    menuPage.classList.remove('active');
    homePage.classList.remove('active');
    removeClass(homePage, "active");
    removeClass(menuPage, 'active');
    addClass(contactPage, 'active');
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
    removeClass(nav, 'showMenu');
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    hamburgerNavTitle.style.display = "block";
  } else {
    addClass(nav, 'showMenu');
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






