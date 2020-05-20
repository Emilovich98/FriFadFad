// Mobile Navigation

function showMobileNav() {

    let showMobileMenu = document.querySelector("#mobile-menu-overlay");
    let showMenuColor = document.querySelector("#mobile-menu");
    let burgerLine1 = document.querySelector("#burger-line-1");
    let burgerLine3 = document.querySelector("#burger-line-3");

    if (showMobileMenu.style.opacity === "100") {
        showMobileMenu.style.opacity = "0";
        showMobileMenu.style.visibility = "hidden";
        showMenuColor.style.backgroundColor = "transparent";
        burgerLine1.style.backgroundColor = "white";
        burgerLine3.style.backgroundColor = "white";
        
    } else {
        showMobileMenu.style.visibility = "visible";
        showMobileMenu.style.opacity = "100";
        showMenuColor.style.backgroundColor = "#F8D560";
        burgerLine1.style.backgroundColor = "black";
        burgerLine3.style.backgroundColor = "black";
    }
    
    // burger animation
    const mobileBurger = document.querySelector("#mobile-burger");

    mobileBurger.classList.toggle("toggle");

}

// Desktop Navigation

function showDesktopNav() {
    
    let showDesktopMenu = document.querySelector("#desktop-menu-overlay");
    let desktopBurgerLine1 = document.querySelector("#desktop-burger-line-1");
    let desktopBurgerLine3 = document.querySelector("#desktop-burger-line-3");
    let showWhiteIcons = document.querySelector("#social-media-icons-white");
    let showBlackIcons = document.querySelector("#social-media-icons-black");
    let showArrow = document.querySelector("#arrow-down");
    
    if (showDesktopMenu.style.width === "768px") {
        showDesktopMenu.style.width = "0px";
        desktopBurgerLine1.style.backgroundColor = "white";
        desktopBurgerLine3.style.backgroundColor = "white";
        showWhiteIcons.style.display = "block";
        showBlackIcons.style.display = "none";
        showArrow.style.display = "flex";
        
    } else {
        showDesktopMenu.style.width = "768px";
        desktopBurgerLine1.style.backgroundColor = "black";
        desktopBurgerLine3.style.backgroundColor = "black";
        showWhiteIcons.style.display = "none";
        showBlackIcons.style.display = "block";
        showArrow.style.display = "none";
    }
    
     // burger animation
    const desktopBurger = document.querySelector("#desktop-burger");

    desktopBurger.classList.toggle("toggle");
    
}


