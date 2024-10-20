// 封装动画函数
function animation(domObj, target, timeout) {
    // 首先清除定时器，防止在 domObj 中存在多个定时器
    clearInterval(domObj.timer);

    let number = (target - domObj.offsetLeft) / 10;
    number = number > 0 ? Math.ceil(number) : Math.floor(number);

    // 设置定时器，并将其赋值给 domObj.timer 属性
    domObj.timer = setInterval(function () {
        if (domObj.offsetLeft === target) {
            // 停止定时器，停止动画
            clearInterval(domObj.timer);
        }else {
            domObj.style.left = domObj.offsetLeft + number + "px";
        }
    }, timeout);
}

let divElement = document.querySelector("div");
let spanElement = document.querySelector("span");
animation(divElement, 300, 15);
animation(spanElement, 200, 15);