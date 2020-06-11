
//kommende forestillinger API
function kommendeForestilling() {
    fetch('json/kommende-forestillinger.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (index) {
                output += `
                <div class="poster">
                    <div class="poster-content">
                        <div class="poster-image-container">
                            <img src="${index.billede}" alt="poster-image">
                        </div>
                        <div class="poster-information">
                            <div class="hashtag-container">
                                <!-- Her skrives hashtags. Dubliker linjen hvis der skal flere hashtags på. -->
                                <p class="hashtag-text"><span class="hashtag-styling">#</span>${index.hashtags[0]}</p>
                                <p class="hashtag-text"><span class="hashtag-styling">#</span>${index.hashtags[1]}</p>
                                <p class="hashtag-text"><span class="hashtag-styling">#</span>${index.hashtags[2]}</p>
                            </div>
                            <div class="poster-title-dato-container">
                                <!-- Her skrives dato og titel -->
                                <p class="poster-dato"><span class="text-backround">${index.dato}</span></p>
                                <h3 class="poster-titel"><span class="text-backround">${index.titel}</span></h3>
                            </div>
                        </div>
                    </div>
                    <div class="poster-buttons">
                        <a class="buy-button" href="https://frifadfor-1.ticketbutler.io/da/events/">KØB</a>
                        <button class="read-more-button">LÆS MERE</button>
                    </div>
                    <!-- Pop up vindue -->
                    <div class="poster-popup-info">
                        <div class="poster-info-container">
                            <div class="pop-up-top-container">
                                <button class="close-button">
                                    <img src="images/x-icon.svg" alt="Close-icon">
                                </button>
                            </div>
                            <div class="photo-text-devider">
                                <div class="pop-up-image-container">
                                    <img class="pop-up-image-size" src="${index.billede}" alt="poster billede">
                                </div>
                                <div class="pop-up-text-container">
                                    <!-- Herunder skrives titel på forestilling -->
                                    <h3 class="pop-up-title">${index.titel}</h3>
                                    <div class="pop-up-description">
                                        <!-- Herunder skrives beskrivelsen på forestillingen -->
                                        <p>${index.beskrivelse}</p>
                                    </div>
                                    <hr class="description-line">
                                    <div class="pop-up-dato">
                                        <!-- Herunder skrives dato for forestllingen -->
                                        <p>${index.dato}</p>
                                        <a class="pup-up-buy-button" href="https://frifadfor-1.ticketbutler.io/da/events/">KØB</a>
                                    </div>
                                    <div class="pop-up-praktisk-info">
                                        <div class="pop-up-praktisk-devider">
                                            <p class="position-text-left">Der åbnes:</p>
                                            <!-- Herunder skrives klokkeslæt -->
                                            <p class="position-text-right">${index.tid}</p>
                                        </div>
                                        <hr class="pop-up-praktisk-line">
                                        <div class="pop-up-praktisk-devider">
                                            <p class="position-text-left">Manuskript:</p>
                                            <!-- Herunder skrives manuskriptforfatter -->
                                            <p class="position-text-right">${index.forfatter}</p>
                                        </div>
                                        <hr class="pop-up-praktisk-line">
                                        <div class="pop-up-praktisk-devider">
                                            <p class="position-text-left">Medvirkende:</p>
                                            <ul>
                                                <!-- Herunder tilføjes flere medvirkende -->
                                                <li>
                                                    <p class="position-text-right">${index.medvirkende}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            })
            document.getElementById("api-forestillinger").innerHTML = output;
            
            let openButton = document.querySelector(".read-more-button");
            let openButton2 = document.querySelector(".poster-content");
            let closeButton = document.querySelector(".close-button");
            let PosterPopUp = document.querySelector(".poster-popup-info");

            function openPopUp() {
                PosterPopUp.style.display = "flex";
            }

            function closePopUp() {
                PosterPopUp.style.display = "none";
            }
        
            openButton.addEventListener("click", openPopUp);
            openButton2.addEventListener("click", openPopUp);
            closeButton.addEventListener("click", closePopUp);
        })
}


function fremtidigForestilling() {
    fetch('json/kommende-datoer.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (index) {
                output += `
                <div class="fremtidig-forestilling">
                        <div class="fremtidig-forestilling-indhold" id="styling-top">
                            <h4 class="forestilling-tid">${index.month}</h4>
                        </div>
                        <div class="fremtidig-forestilling-indhold" id="styling-bottom">
                            <p class="foresttilling-kommer">KOMMENDE</p>
                        </div>
                    </div>
            `;
            })
            document.getElementById("fremtidig-forestilling-container").innerHTML = output;
        })
}

kommendeForestilling();
fremtidigForestilling();



