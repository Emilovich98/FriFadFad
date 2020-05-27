let videoButton = document.querySelector("#forside-video-knap");
let videoPopUp = document.querySelector("#forside-video-pop-up");
let closeVideoButton = document.querySelector("#close-button-forside-video");

function openVideo () {
    videoPopUp.style.display = "block";
}

function closeVideo () {
    videoPopUp.style.display = "none";
}

videoButton.addEventListener("click", openVideo);
closeVideoButton.addEventListener("click", closeVideo);