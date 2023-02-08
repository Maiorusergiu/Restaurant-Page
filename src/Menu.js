import { addClass } from "./HelperMethods";

const MenuPage = () => {
    const content = document.getElementById('content');
    const footer = document.querySelector('footer');
    document.body.insertBefore(content, footer);
    createMenuTitle();

   
    createPizzaMenu();
    createHamburgersMenu();
    createSpagettiMenu();
    createDrinks();
    
    

}
const createHamburgersMenu = () => {
    const menuBox = document.createElement('div');
    addClass(menuBox, 'menu-box');
    content.appendChild(menuBox);
    createMenu(menuBox, "Hamburgers");
    createFoodItem(menuBox, "Hambuger1",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.",
    8, "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    createFoodItem(menuBox, "Hamburger2",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.",
    11, "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    createFoodItem(menuBox, "Hamburger3",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.",
    19, "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
}
const createPizzaMenu = () => {
    const menuBox = document.createElement('div');
    addClass(menuBox, 'menu-box');
    content.appendChild(menuBox);
    createMenu(menuBox, "Pizza");
    createFoodItem(menuBox, "Pizza1",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.",
     23, "https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
     createFoodItem(menuBox, "Pizza2",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.",
     13, "https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
     createFoodItem(menuBox, "Pizza3",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.",
     10, "https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=600");

}
const createSpagettiMenu = () => {
    const menuBox = document.createElement('div');
    addClass(menuBox, 'menu-box');
    content.appendChild(menuBox);
    createMenu(menuBox, "Spagetti");
    createFoodItem(menuBox, "Spagetti1",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.",
     11, "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
     createFoodItem(menuBox, "Spagetti2",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.",
     14, "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
     createFoodItem(menuBox, "Spagetti3",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.",
     17, "https://images.pexels.com/photos/2433979/pexels-photo-2433979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

}
const createDrinks = () => {
    const menuBox = document.createElement('div');
    addClass(menuBox, 'menu-box');
    content.appendChild(menuBox);
    createMenu(menuBox, "Drinks");
    createFoodItem(menuBox, "Coca Cola",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.",
     5, "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
     createFoodItem(menuBox, "Coffee",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.",
     4, "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
     createFoodItem(menuBox, "Ice Coffee",
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis.",
     7, "https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");


}
const createFoodItem = (menuBox, foodNameText, foodDescriptionText, randomPrice, imagePath) => {
    const foodItem = document.createElement('div');
    addClass(foodItem, 'food-item');
    menuBox.appendChild(foodItem);
    const foodImageBox = document.createElement('div');
    addClass(foodImageBox, 'food-image-box');
    foodItem.appendChild(foodImageBox);
    const foodImage = document.createElement('img');
    addClass(foodImage, 'food-image');
    // foodImage.src = `${imagePath}`;
    // foodImage.loading = "lazy";
    foodImage.src = `${imagePath}`;
    foodImageBox.appendChild(foodImage);

    const foodDescriptionBox = document.createElement('div');
    addClass(foodDescriptionBox, 'food-description-box');
    foodItem.appendChild(foodDescriptionBox);
    const foodName = document.createElement('h2');
    addClass(foodName, 'food-name');
    foodName.textContent = `${foodNameText}`;

    const foodDescription = document.createElement('p');
    addClass(foodDescription, 'food-description');
    foodDescription.textContent = `${foodDescriptionText}`;
    foodDescriptionBox.append(foodName, foodDescriptionText);

    const foodPriceBox = document.createElement('div');
    addClass(foodPriceBox, 'food-price-box');
    foodItem.appendChild(foodPriceBox);

    const foodPrice = document.createElement('h2');
    addClass(foodPrice, 'food-price');
    const dollarSymbol = document.createElement('i');
    addClass(dollarSymbol, 'bi.bi-currency-dollar')
    foodPrice.appendChild(dollarSymbol);
    foodPrice.innerHTML = `<i class="bi bi-currency-dollar"></i>${randomPrice}`
    const orderButton = document.createElement('button');
    addClass(orderButton, 'order-button');
    orderButton.textContent = "Order";
    foodPriceBox.append(foodPrice, orderButton);

}

const createMenu = (menuBox, foodCategoryTitleText) => {
    const menuTitle = document.createElement('div');
    addClass(menuTitle, 'menu-title')
    menuBox.appendChild(menuTitle);
    const foodCategoryTitle = document.createElement('h1');
    addClass(foodCategoryTitle, 'food-category-title');
    foodCategoryTitle.textContent = `${foodCategoryTitleText}`;
    menuTitle.appendChild(foodCategoryTitle);
}
const createMenuTitle = () => {
    /*Create menu title*/
    const menuBackgroundImage = document.createElement('div');
    addClass(menuBackgroundImage, 'menu-background-image');
    content.appendChild(menuBackgroundImage);
    
    const menuTitleContainer = document.createElement('div');
    addClass(menuTitleContainer, 'menu-title-container');
    menuBackgroundImage.appendChild(menuTitleContainer);
    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    addClass(menuTitle, 'menu-title');
    menuTitle.textContent = "MENU";
    menuTitleContainer.appendChild(menuTitle);
    /*Create menu title*/
}
export { MenuPage }