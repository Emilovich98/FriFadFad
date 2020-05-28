let historieBtn = document.getElementById("btn1");
let missionBtn = document.getElementById("btn2");
let visionBtn = document.getElementById("btn3");
let valueBtn = document.getElementById("btn4");

let historieCanvas = document.getElementById("kategori-tab-historie");
let missionCanvas = document.getElementById("kategori-tab-mission");
let visionCanvas = document.getElementById("kategori-tab-vision");
let valueCanvas = document.getElementById("kategori-tab-value");

function showHistorie () {
    historieCanvas.style.display = "block";
    
    missionCanvas.style.display = "none";
    visionCanvas.style.display = "none";
    valueCanvas.style.display = "none";
}

function showMission () {
    missionCanvas.style.display = "block";
    
    historieCanvas.style.display = "none";
    visionCanvas.style.display = "none";
    valueCanvas.style.display = "none";
}

function showVision () {
    visionCanvas.style.display = "block";
    
    historieCanvas.style.display = "none";
    missionCanvas.style.display = "none";
    valueCanvas.style.display = "none";
}

function showValue () {
    valueCanvas.style.display = "block";
    
    historieCanvas.style.display = "none";
    missionCanvas.style.display = "none";
    visionCanvas.style.display = "none";
}

historieBtn.addEventListener("click", showHistorie);
missionBtn.addEventListener("click", showMission);
visionBtn.addEventListener("click", showVision);
valueBtn.addEventListener("click", showValue);



