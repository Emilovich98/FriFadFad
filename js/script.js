// Mobile Navigation

function showMobileNav() {
    
    let showMobileMenu = document.querySelector("#mobile-menu");
    let mobileBurgerLine1 = document.querySelector("#mobile-burger-line-1");
    let mobileBurgerLine3 = document.querySelector("#mobile-burger-line-3");
    
    if (showMobileMenu.style.opacity === "100") {
        showMobileMenu.style.opacity = "0";
        showMobileMenu.style.visibility = "hidden";
        mobileBurgerLine1.style.backgroundColor = "white";
        mobileBurgerLine3.style.backgroundColor = "white";
        
    } else {
        showMobileMenu.style.visibility = "visible";
        showMobileMenu.style.opacity = "100";
        mobileBurgerLine1.style.backgroundColor = "black";
        mobileBurgerLine3.style.backgroundColor = "black";
    }
    
    // burger animation
    const mobileBurger = document.querySelector("#mobile-burger");

    mobileBurger.classList.toggle("toggle");
}

// Desktop Navigation

function showDesktopNav() {
    
    let showDesktopMenu = document.querySelector("#desktop-menu-links");
    let desktopBurgerLine1 = document.querySelector("#desktop-burger-line-1");
    let desktopBurgerLine3 = document.querySelector("#desktop-burger-line-3");
    let showWhiteIcons = document.querySelector("#social-media-icons-white");
    let showBlackIcons = document.querySelector("#social-media-icons-black");
    
    if (showDesktopMenu.style.width === "768px") {
        showDesktopMenu.style.width = "0px";
        desktopBurgerLine1.style.backgroundColor = "white";
        desktopBurgerLine3.style.backgroundColor = "white";
        showWhiteIcons.style.visibility = "visible";
        showBlackIcons.style.visibility = "hidden";
        
    } else {
        showDesktopMenu.style.width = "768px";
        desktopBurgerLine1.style.backgroundColor = "black";
        desktopBurgerLine3.style.backgroundColor = "black";
        showWhiteIcons.style.visibility = "hidden";
        showBlackIcons.style.visibility = "visible";
    }
    
     // burger animation
    const desktopBurger = document.querySelector("#desktop-burger");

    desktopBurger.classList.toggle("toggle");
}


const topLogo = document.querySelector("#top-logo");

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.pageYOffset > 300){
        topLogo.style.opacity = "99";
    }
    else{
        topLogo.style.opacity = "0";
    }
}













