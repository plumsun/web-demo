(function () {
    let ulListElement = document.querySelector("ul");
    let carouselElement = document.querySelector(".carousel");


    const images = [
        "img/202309200030_9a6a9bf107f4b4a7a25e4ccedf0c1174.png",
        "img/202309200032_5beee8420f9734b24d538e68e5c655ac.png",
        "img/202309200034_b724e1ddef5a0bf5c79c273193b7073c.png",
        "img/202310251928_35fb2880108e9aa56fdcf7f894249f26.png",
        "img/202310251937_a4ac1ae382a402426beb915f401e50e5.png"
    ];

    images.forEach((image) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = image;
        img.alt = "Image";
        li.appendChild(img);
        ulListElement.appendChild(li);
    });
}());

import {animation} from "./animation.js";

let ulListElement = document.querySelector("ul");
let carouselElement = document.querySelector(".carousel");
let rightBar = document.querySelector(".right-bar");
let leftBar = document.querySelector(".left-bar");

rightBar.addEventListener("click", function () {
    let target, timeout;
    if (ulListElement.offsetLeft === -800) {
        target = 0;
        timeout = 0;
    } else {
        target = ulListElement.offsetLeft - carouselElement.offsetWidth;
        timeout = 10;
    }
    animation(ulListElement, target, timeout, function () {
    });
});

leftBar.addEventListener("click", function () {
    let target, timeout;
    if (ulListElement.offsetLeft === 0) {
        target = -800;
        timeout = 0;
    } else {
        target = ulListElement.offsetLeft + carouselElement.offsetWidth;
        timeout = 10;
    }
    animation(ulListElement, target, timeout, function () {
    });
});

function getListener() {
    let target, timeout;
    if (ulListElement.offsetLeft === -800) {
        target = 0;
        timeout = 0;
    } else {
        target = ulListElement.offsetLeft - carouselElement.offsetWidth;
        timeout = 20;
    }
    animation(ulListElement, target, timeout, function () {
    });
}

let interval = setInterval(getListener, 3000);

carouselElement.addEventListener("mouseenter", extracted);

function extracted() {
    rightBar.style.display = "block";
    leftBar.style.display = "block";
    window.clearInterval(interval);
}

carouselElement.addEventListener("mouseleave", () => {
    interval = setInterval(getListener, 3000);
    rightBar.style.display = "none";
    leftBar.style.display = "none";
});
