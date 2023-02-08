import { addClass } from "./HelperMethods";
import { MenuPage } from "./Menu";
import { clearContent } from "./pageLoad";


const HomePage = () => {

    const content = document.getElementById('content');
    const footer = document.querySelector('footer');
    document.body.insertBefore(content, footer);
    /*Home page content*/
    /*create welcome content*/
    const welcomeContent = document.createElement('div');
    const chefImage = document.createElement('div');
    const welcomeText = document.createElement('h1');
    addClass(chefImage, 'chef-image');
    chefImage.setAttribute("id", "box-shadow-transition");
    addClass(welcomeText, 'welcome');
    welcomeText.textContent = "Welcome to our Restaurant!";
    addClass(welcomeContent, 'welcome-content');
    content.appendChild(welcomeContent);
    welcomeContent.append(chefImage, welcomeText);
    /*create welcome content*/

    /*Create food images*/
    const foodImages = document.createElement('div');
    content.appendChild(foodImages);
    addClass(foodImages, 'food-images');
    /*Carbonara*/
    const pastaImageContainer = document.createElement('div');
    addClass(pastaImageContainer, 'pasta-image-container');
    const pastaFood = document.createElement('div');
    addClass(pastaFood, 'pasta');
    const pastaText = document.createElement('p');
    pastaText.textContent = "Pasta"
    addClass(pastaText, 'pasta-text');
    pastaImageContainer.append(pastaFood, pastaText);
    foodImages.appendChild(pastaImageContainer);
    /*Carbonara*/

    /*Hamburger*/
     const hamburgerImageContainer = document.createElement('div');
     hamburgerImageContainer.classList.add('hamburger-image-container');
     const hamburgerFood = document.createElement('div');
     addClass(hamburgerFood, 'hamburger')
     const hamburgerText = document.createElement('p');
     hamburgerText.textContent = "Hamburger"
     addClass(hamburgerText, 'hamburger-text');
     hamburgerImageContainer.append(hamburgerFood, hamburgerText);
     foodImages.appendChild(hamburgerImageContainer);
    /*Hamburger*/

     /*Pizza*/
     const pizzaImageContainer = document.createElement('div');
     addClass(pizzaImageContainer, 'pizza-image-container');
     const pizzaFood = document.createElement('div');
     addClass(pizzaFood, 'pizza');
     const pizzaText = document.createElement('p');
     pizzaText.textContent = "Pizza"
     addClass(pizzaText, 'pizza-text');
     pizzaImageContainer.append(pizzaFood, pizzaText);
     foodImages.appendChild(pizzaImageContainer);
    /*Pizza*/
    /*Create food images*/
    /*Home page content*/
    changeChefImage(); //function to change the chef image
    aboutUsSection();
}

const aboutUsSection = () => {
    const content = document.getElementById('content');
    const aboutUs = document.createElement('div');
    addClass(aboutUs, "about-us");
    content.appendChild(aboutUs);

    const aboutUsTitle = document.createElement('h1');
    addClass(aboutUsTitle, "about-us-title");
    aboutUs.appendChild(aboutUsTitle);
    aboutUsTitle.textContent = "About Us";

    const aboutUsDescription = document.createElement('p');
    addClass(aboutUsDescription, 'about-us-description');
    aboutUs.appendChild(aboutUsDescription);
    aboutUsDescription.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Natus animi illo itaque magnam reiciendis exercitationem
    tempora obcaecati doloremque quod sapiente?`;

    const aboutUsImage = document.createElement('div');
    addClass(aboutUsImage, 'about-us-image');
    aboutUs.appendChild(aboutUsImage);

    const anotherAboutDescription = document.createElement('p');
    addClass(anotherAboutDescription, 'about-us-description');
    aboutUs.appendChild(anotherAboutDescription);
    anotherAboutDescription.textContent = ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Animi molestiae fugit voluptate beatae in ipsam a nobis, fuga laborum!
    Assumenda, accusamus vitae impedit provident dolore id deleniti tempore quos expedita
    exercitationem tempora accusantium perspiciatis voluptatem
    veniam iste sed officia atque rem suscipit repellendus? Laborum, assumenda illo.
    Atque placeat ab voluptas.`

    const anotherTitle = document.createElement('h1');
    addClass(anotherTitle, "about-us-title");
    aboutUs.appendChild(anotherTitle);
    anotherTitle.textContent = "See The Menu";

    const downArrow = document.createElement('i');
    addClass(downArrow, 'bi-arrow-down-circle-fill');
    downArrow.style.fontSize = "40px";
    aboutUs.appendChild(downArrow);

    const menuButton = document.createElement('button');
    const menuPage = document.querySelector('.menu');
    const homePage = document.querySelector('.home');
    const contactPage = document.querySelector('.contact');
    menuButton.textContent = "Menu";
    addClass(menuButton, 'menu-button');
    aboutUs.appendChild(menuButton);
    menuButton.addEventListener('click', () => {
        clearContent();
        menuPage.classList.add('active');
        homePage.classList.remove('active');
        contactPage.classList.remove('active');
        MenuPage();
    })
}

const changeChefImage = () => {
    let chefImage = document.querySelector('.chef-image');
    let count = 0;
    setInterval(() => {
        count++;
        if(count === 0){
            chefImage.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/02/08/07/39/chef-5993951__340.jpg')";
        }
        if(count === 1){
            chefImage.style.backgroundImage = "url('https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=600')";
        }
        if(count === 2){
            chefImage.style.backgroundImage = "url('https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
            count = -1;
        }
       
    }, 3500)
    
       
};

export { HomePage };