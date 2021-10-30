// DOM
let hamBtn = document.querySelector(".hamburger");
let modalMenu = document.querySelector(".modal-menu");
let icons = document.querySelectorAll(".icons");
let listing = document.querySelectorAll(".listing");
let subListing = document.querySelectorAll(".sub-listing");
let clickers = document.querySelectorAll(".clickers");
let btnContainers = document.querySelectorAll(".button-container");
let modalsignin = document.querySelector(".signin-modal");
let modalogin = document.querySelector(".login-modal");
let entryslog = document.querySelector(".entrylog");
let singlog = document.querySelector(".signlog");
let modalentry = document.querySelector(".modalentry");
let signentry = document.querySelector(".signentry");




document.addEventListener('DOMContentLoaded', handleResize);


let resizer = new ResizeObserver(handleResize);
resizer.observe(document.querySelector('.top-container'));

function handleResize(entries) {
    
    if (entries[0].contentRect.width > 760) {

        modalMenu.style.visibility = "hidden";
        

    } else {
        modalMenu.style.visibility = "visible";
        
    }
}

 


hamBtn.addEventListener('click', () => {
    modalMenu.classList.toggle("show");

});

listing.forEach((list) => {
    list.addEventListener("click", (e) => {
        
        e.currentTarget.children[1].classList.toggle("show");
        e.currentTarget.children[0].classList.toggle("rotates");
        
            
    })

});

btnContainers.forEach((btnContainer) => {
    btnContainer.addEventListener("click", (e) =>{
        
        
        e.currentTarget.children[1].classList.toggle("dskinfoshow");
        e.currentTarget.children[0].classList.toggle("rotates");
    })
});



clickers.forEach((clicker) => {
    clicker.addEventListener('click', (e) =>{
        modalMenu.classList.remove("show");
        modalogin.classList.remove("login-modalshow");
        modalsignin.classList.remove("login-modalshow");

    })
});


entryslog.addEventListener('click', () => {
    
    modalogin.classList.toggle("login-modalshow");
});

singlog.addEventListener('click', () => {
    modalsignin.classList.toggle("login-modalshow");
})


modalentry.addEventListener('click', ()=>{
    modalogin.classList.toggle("login-modalshow");
})


signentry.addEventListener('click', () =>{
    modalsignin.classList.toggle("login-modalshow");
    
})






















