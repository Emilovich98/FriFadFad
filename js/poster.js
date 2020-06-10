let readMoreBtn = document.querySelector(".read-more-button");
let PosterPopUp = document.querySelector(".poster-popup-info");
let closePosterBtn = document.querySelector(".close-button");

function openPopUp () {
    PosterPopUp.style.display = "flex";
}

function closePopUp () {
    PosterPopUp.style.display = "none";
}

readMoreBtn.addEventListener("click", openPopUp);
closePosterBtn.addEventListener("click", closePopUp);