import { addClass, removeClass } from "./HelperMethods";

const createNavbar = (homePage, menuPage, contactPage) => {
    const navbarAndHamburgerMenu = document.createElement('div');
    const navbar = document.createElement('nav');
    const titleContainer = document.createElement('div');
    const titleName = document.createElement("h1");
    const pagesList = document.createElement('ul');

    /*Hamburger menu*/
    const hamburgerMenuBox = document.createElement('div');
    const titleNameHamburgerMenu = document.createElement("h1");
    const hamburgerMenuButton = document.createElement('button');
    const menuIcon = document.createElement('i');
    const closeIcon = document.createElement('i');
    /*Hamburger menu*/
    
    // /*Create navbar*/
    document.body.appendChild(navbarAndHamburgerMenu);
        addClass(navbarAndHamburgerMenu, 'nav-and-hamburger-menu');
        navbarAndHamburgerMenu.appendChild(navbar)
        navbar.classList.add("nav");
        navbar.append(titleContainer, pagesList);

        /*create hamburger menu*/
        navbarAndHamburgerMenu.appendChild(hamburgerMenuBox);
        addClass(hamburgerMenuBox, 'hamburger-menu-box')
        hamburgerMenuBox.appendChild(titleNameHamburgerMenu);
        addClass(titleNameHamburgerMenu, "title-name");
        addClass(titleNameHamburgerMenu, "hamburger-nav-title");
        titleNameHamburgerMenu.textContent = "Pizzhouse";

        hamburgerMenuBox.appendChild(hamburgerMenuButton);
        addClass(hamburgerMenuButton, 'hamburger-menu');
        addClass(menuIcon, 'menuIcon');
        addClass(menuIcon, 'bi-list');
        addClass(closeIcon, 'closeIcon')
        addClass(closeIcon, 'bi-x-square');
        hamburgerMenuButton.append(closeIcon, menuIcon);
        /*create hamburger menu*/
            
        // /*create title navbar*/
        titleContainer.classList.add("title-container");
            
        titleName.classList.add('title-name');
        titleName.textContent = "Pizzahouse";
        titleContainer.appendChild(titleName);
        /*create title navbar*/
            
        // /*Create pages list*/
        pagesList.classList.add('pages-list');
        pagesList.append(homePage, menuPage, contactPage);
        /*Create pages list*/
        /*append pages to page list*/
        homePage.textContent = "Home"
        homePage.classList.add('home', 'active', 'menuItem');
        menuPage.textContent = "Menu"
        menuPage.classList.add('menu', 'menuItem');
        contactPage.textContent = "Contact"
        contactPage.classList.add('contact', 'menuItem');
            /*append pages to page list*/
            // /*Create navbar*/

            window.onscroll = function () { 
            if (document.documentElement.scrollTop >= 100 ) {
                addClass(homePage, 'make-pages-text-smaller');
                addClass(menuPage, 'make-pages-text-smaller');
                addClass(contactPage, 'make-pages-text-smaller');
                addClass(titleName, 'make-title-nav-smaller');
            }  else {
                removeClass(homePage, 'make-pages-text-smaller');
                removeClass(menuPage, 'make-pages-text-smaller');
                removeClass(contactPage, 'make-pages-text-smaller');
                removeClass(titleName, 'make-title-nav-smaller');
            }
        }
}
const createContentDiv = () => {
        const content = document.createElement('div');
        const footer = document.querySelector('footer');
        content.setAttribute('id', 'content');
        document.body.insertBefore(content, footer);
}
const createFooter = () => {
    const footer = document.createElement('footer');
      document.body.appendChild(footer);
      const footerText = document.createElement('small');
      const githubIcon = document.createElement("i");
      githubIcon.classList.add('bi', 'bi-github');
      footer.appendChild(footerText);
      footerText.classList.add('footer-text');
      footerText.innerHTML = "&copy; Copyright 2023, SergiuWebDev <i class='bi bi-github'></i>";
}
const clearContent = () => {
    let content = document.getElementById('content');
    content.innerHTML = "";

}

export { createNavbar, createContentDiv, createFooter, clearContent };