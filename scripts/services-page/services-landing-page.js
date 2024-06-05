
import {services} from "../data/services.js"

let serviceContainer = document.querySelector(".js-service-container");
serviceContainer.innerHTML = `

    <div class="left js-left">
      </div>

      <div class="right js-right">
      </div>

`;

let rightContainer = document.querySelector(".js-right");

rightContainer.innerHTML += `
    <h2>More Services</h2>
    <div class="links js-links" >
    </div>`;

let linkContainer = document.querySelector(".js-links");

services.forEach((service) => {
  linkContainer.innerHTML += `

        <button class = "service-button js-service-button" id ="${service.title}">${service.title}</button>
        `;
});

rightContainer.innerHTML += `<a href="/pages/contact/contact.html"><button class = "contact-button">Contact Us</button></a>`;


let serviceButtons= document.querySelectorAll(".js-service-button");
let leftContainer = document.querySelector(".js-left");

//retrieve Seleted service from previous page (index.html)
const clickedElementID = sessionStorage.getItem('data');

displaySelectedData(clickedElementID);

//Add event lister to the service buttons on the right container
serviceButtons.forEach((serviceButton) => {
  serviceButton.addEventListener("click", () => {
    displaySelectedData(serviceButton.id)
  });
});


/*a funtion to display the data of a particular service using id from 
clicked html element
*/
function displaySelectedData(serviceId){
    leftContainer.innerHTML = "";
    let foundService = services.find(
      (service) => service.title === serviceId
    );


    let headingOne = document.querySelector(".js-heading-one");
    headingOne.innerHTML = foundService.title;

    foundService.data.forEach((dataObject) => {
      const divContainer = document.createElement("div");
      divContainer.setAttribute("class", "container js-container");
      divContainer.setAttribute("id", `${dataObject.title}`)

      const divImage = document.createElement("div");
      divImage.setAttribute("class", "images");

      const image = document.createElement("img");
      image.setAttribute("src", `${dataObject.image}`);

      const divContent = document.createElement("div");
      divContent.setAttribute("class", "content");

      const icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.setAttribute("src", `${dataObject.icon}`);

      const divText = document.createElement("div");
      divText.setAttribute("class", "text");

      const headingTwo = document.createElement("h2");

      const paragraph = document.createElement("p");

      headingTwo.append(`${dataObject.title}`);
      paragraph.append(`${dataObject.text}`);
      divContent.append(icon);
      divContent.append(divText);
      divText.append(headingTwo);
      divText.append(paragraph);
      divImage.append(image);
      divContainer.append(divImage);
      divContainer.append(divContent);

      leftContainer.append(divContainer);

      divContainer.addEventListener('click', ()=>{
    
        const variableToPass =  foundService.title ;
        console.log(variableToPass)
        sessionStorage.setItem('data', variableToPass);
        const elementToPass = divContainer.id;
        sessionStorage.setItem('element', elementToPass);
        window.location.href = '/pages/services/services-details.html';

      })
      
    });


}


