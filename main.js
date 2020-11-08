let mobileNav = document.querySelector(".mobile-nav");
let toggleBtn = document.querySelector(".toggle_button");
let backdrop = document.querySelector(".backdrop");


toggleBtn.addEventListener("click",function(){
    mobileNav.style.display = "block";
    backdrop.style.display = "block";
});

backdrop.addEventListener("click",function(){
    mobileNav.style.display = "none";
    backdrop.style.display = "none";
});


//Pre Loader
let preLoader = document.querySelector(".preloader");

function myLoader(){
    preLoader.style.display ="none";
}
