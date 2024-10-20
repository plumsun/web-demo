import {animation} from "./animation.js";


let barElement = document.querySelector(".slider-bar");
let feedbackElement = document.querySelector(".feedback");

function left_animation() {
    animation(feedbackElement, feedbackElement.offsetLeft - feedbackElement.offsetWidth, 15, textChange, true);
}

function right_animation() {
    animation(feedbackElement, 2048, 15, textChange, false);
}

barElement.addEventListener("mouseenter", left_animation);
barElement.addEventListener("mouseout", right_animation);

function textChange(isLeft) {
    console.log(isLeft);
    if (isLeft) {
        barElement.innerHTML = "→";
    } else {
        barElement.innerHTML = "←";
    }
}
