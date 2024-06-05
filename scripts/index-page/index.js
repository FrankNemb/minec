
let serviceColumns = document.querySelectorAll('.js-service-col');


serviceColumns.forEach((column)=>{
    
    column.addEventListener("click", ()=>{
     
        const variableToPass =  column.id ;
        console.log(variableToPass)
        sessionStorage.setItem('data', variableToPass);
        window.location.href = 'pages/services/services-landing-page.html';
        
    })
})





