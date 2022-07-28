const slides = ["images/myArt/baukehh2.svg", "images/myArt/customcut2.svg", "images/myArt/dress copy 2.svg", "images/myArt/icompuTek 1.svg", "images/myArt/kitty1.svg", "images/myArt/owl1.svg", "images/myArt/rooted.svg", "images/myArt/tree21.svg", "images/myArt/vine.svg"];
const texts = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var maxIndex = slides.length -1;
var imageIndex = Math.round(maxIndex/2);

function next() {
    imageIndex++;
    if (imageIndex > maxIndex) {
        imageIndex=0;
    }
    loadImage(imageIndex);
}

function back() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex= maxIndex;
    }
    loadImage(imageIndex);
    updateText(indx) 
}

function loadImage(indx) {
    if (indx == null) {
        indx = imageIndex;
    }
    var imagePath = slides[indx];
    var imgElement = document.getElementById("art");
    imgElement.src=imagePath;
    updateDot(indx);
    updateText(indx) 
}

function updateDot(indx) {
    const dots = document.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
        if (i == indx) {
            dots[i].classList.add("dotClicked");
        } else {
            dots[i].classList.remove("dotClicked");
        }
    }
}

function updateText(indx) {
    const textElement = document.getElementById("contentText");
    textElement.innerText = texts[indx];
}