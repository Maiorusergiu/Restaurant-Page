import { addClass } from "./HelperMethods";

const ContactPage = () => {
    const content = document.getElementById('content');
    const footer = document.querySelector('footer');
    document.body.insertBefore(content, footer);

    const contactUs = document.createElement('div');
    addClass(contactUs, 'contact-us');
    content.appendChild(contactUs);

    const contactUsTitle = document.createElement('h1');
    addClass(contactUsTitle, 'contact-us-title');
    contactUsTitle.textContent = "Contact Us";
    contactUs.appendChild(contactUsTitle);

    const contactUsText = document.createElement('p');
    addClass(contactUsText, 'contact-us-text');
    contactUsText.textContent = ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Placeat, veniam delectus laudantium officiis atque ipsam quo doloremque amet officia doloribus?
    Architecto asperiores veritatis assumenda aperiam pariatur molestias, hic ratione sint.`
    contactUs.appendChild(contactUsText);

    const contactLocation = document.createElement('div');
    addClass(contactLocation, 'contact-location');
    contactUs.appendChild(contactLocation);

    const address = document.createElement('div');
    addClass(address, 'address');
    contactLocation.appendChild(address);

    createAddress(address);
    createPhone(address);
    createEmail(address);
    createForm(contactLocation);
   

}

const createForm = (contactLocation) => {
    const form = document.createElement('form');
    form.action = "#";
    contactLocation.appendChild(form);

    const titleForm = document.createElement('h1');
    addClass(titleForm, 'title-form');
    titleForm.textContent = "Send Message";
    form.appendChild(titleForm);

    const inputBox1 = document.createElement('div');
    addClass(inputBox1, 'inputBox');
    form.appendChild(inputBox1);
    const nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.required = true;
    inputBox1.appendChild(nameInput);
    const span1 = document.createElement('span');
    span1.textContent = "Full Name";
    inputBox1.appendChild(span1);

    const inputBox2 = document.createElement('div');
    addClass(inputBox2, 'inputBox');
    form.appendChild(inputBox2);
    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.required = true;
    inputBox2.appendChild(emailInput);
    const span2 = document.createElement('span');
    span2.textContent = "Email";
    inputBox2.appendChild(span2);

    const inputBox3 = document.createElement('div');
    addClass(inputBox3, 'inputBox');
    form.appendChild(inputBox3);
    const textArea = document.createElement('textarea');
    textArea.required = true;
    textArea.cols = "20";
    textArea.rows = "5";
    inputBox3.appendChild(textArea);
    const span3 = document.createElement('span');
    span3.textContent = "Type a Message...";
    inputBox3.appendChild(span3);

    const submitButton = document.createElement('button');
    addClass(submitButton, 'submit-button');
    submitButton.textContent = "Submit";
    submitButton.type = "submit";
    form.appendChild(submitButton);
    submitButton.addEventListener('click', (e) => {
        if(nameInput.value && emailInput.value && textArea.value){
        e.preventDefault();
        form.reset();
        console.log("submitted");
        if(!document.querySelector(".submitted")){
        const submitBox = document.createElement('div');
        addClass(submitBox, 'submitted');
        form.appendChild(submitBox);
        const submitted = document.createElement('p');
        submitted.textContent = "Submitted!";
        submitBox.appendChild(submitted);
        }
    }
    })
  
}

const createEmail = (address) => {
    const email = document.createElement('div');
    addClass(email, 'email');
    address.appendChild(email);

    const emailIcon = document.createElement('i');
    addClass(emailIcon, 'bi-envelope-fill');
    email.appendChild(emailIcon);

    const titleAndDescription = document.createElement('div');
    addClass(titleAndDescription, 'titleAndDescription');
    email.appendChild(titleAndDescription);

    const emailTitle = document.createElement('h4');
    addClass(emailTitle, 'email-title');
    emailTitle.textContent = "EMAIL";
    titleAndDescription.appendChild(emailTitle);

    const emailDescription = document.createElement('p');
    addClass(emailDescription, 'email-description');
    emailDescription.textContent = "FAKEEMAIL@GMAIL.COM";
    titleAndDescription.appendChild(emailDescription);
}
const createPhone = (address) => {
    const phone = document.createElement('div');
    addClass(phone, 'location');
    address.appendChild(phone);

    const phoneIcon = document.createElement('i');
    addClass(phoneIcon, 'bi-telephone-fill');
    phone.appendChild(phoneIcon);

    const titleAndDescription = document.createElement('div');
    addClass(titleAndDescription, 'titleAndDescription');
    phone.appendChild(titleAndDescription);

    const phoneTitle = document.createElement('h4');
    addClass(phoneTitle, 'phone-title');
    phoneTitle.textContent = "PHONE";
    titleAndDescription.appendChild(phoneTitle);

    const phoneDescription = document.createElement('p');
    addClass(phoneDescription, 'phone-description');
    phoneDescription.textContent = "1234-567-890";
    titleAndDescription.appendChild(phoneDescription);
}
const createAddress = (address) => {
    const location = document.createElement('div');
    addClass(location, 'location');
    address.appendChild(location);

    const locationIcon = document.createElement('i');
    addClass(locationIcon, 'bi-geo-alt-fill');
    location.appendChild(locationIcon);

    const titleAndDescription = document.createElement('div');
    addClass(titleAndDescription, 'titleAndDescription');
    location.appendChild(titleAndDescription);

    const locationTitle = document.createElement('h4');
    addClass(locationTitle, 'location-title');
    locationTitle.textContent = "ADDRESS";
    titleAndDescription.appendChild(locationTitle);

    const locationDescription = document.createElement('p');
    addClass(locationDescription, 'location-description');
    locationDescription.textContent = "Street Pizzahouse No. 3";
    titleAndDescription.appendChild(locationDescription);
}
export {ContactPage}