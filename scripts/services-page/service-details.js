import { services } from "/minec/scripts/data/services.js";

let serviceContainer = document.querySelector(".js-service-container");
serviceContainer.innerHTML = `

    <div class="left-service-details js-left">
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

const clickedServiceTitle = sessionStorage.getItem("data");


let foundService = services.find(
  (service) => service.title === clickedServiceTitle
);

foundService.data.forEach((data) => {
  linkContainer.innerHTML += `

        <button class = "service-button js-service-button" id ="${data.title}">${data.title}</button>
        `;
});

rightContainer.innerHTML += ` <button class = "contact-button">Contact Us</button>`;
let leftContainer = document.querySelector('.js-left');
let serviceButtons= document.querySelectorAll(".js-service-button");
const clickedElementID = sessionStorage.getItem("element");
displaySelectedData(clickedElementID);

//Add event lister to the service buttons on the right container
serviceButtons.forEach((serviceButton) => {
  serviceButton.addEventListener("click", () => {
  
   displaySelectedData(serviceButton.id);

  });
});


/*

let leftContainer = document.querySelector(".js-left");

//retrieve Seleted service from previous page (index.html)
const clickedElementID = sessionStorage.getItem('data');

displaySelectedData(clickedElementID);




/*a funtion to display the data of a particular service using id from 
clicked html element
*/


function displaySelectedData(serviceId){
    leftContainer.innerHTML = "";
    let foundServiceData = foundService.data.find(
      (serviceData) => serviceData.title === serviceId
    );


    let headingOne = document.querySelector(".js-heading-one");
    headingOne.innerHTML = foundServiceData.title;

    
      leftContainer.innerHTML += `
        <div class = "main-title">
          <img src="${foundServiceData.image}">
          <h2>${foundServiceData.title}</h2>
        
        </div>
      `

      leftContainer.innerHTML += `
        
      <div class = "content-card">
          <p>${foundServiceData.content}</p>
        </div>
      
      `

      /*foundServiceData.content.forEach((content)=>{
        leftContainer.innerHTML += `

        <div class = "content-card">
          <h3>${content.title}</3>
          <p>${content.paragraph}</p>
        </div>
        
        
      })*/

    
    
}
