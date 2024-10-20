// 封装动画函数
function animation(domObj, target, timeout, callback) {
    // 首先清除定时器，防止在 domObj 中存在多个定时器
    clearInterval(domObj.timer);

    let number = (target - domObj.offsetLeft) / 100;
    number = number > 0 ? Math.ceil(number) : Math.floor(number);

    // 设置定时器，并将其赋值给 domObj.timer 属性
    domObj.timer = setInterval(function () {
        if (domObj.offsetLeft === target) {
            // 停止定时器，停止动画
            clearInterval(domObj.timer);
            // 添加回调
            if (callback) {
                callback(domObj);
            }
        } else {
            domObj.style.left = domObj.offsetLeft + number + "px";
        }
    }, timeout);
}

function callback(obj) {
    obj.style.left = "0px";
}


let divElement = document.querySelector("div");
let spanElement = document.querySelector("span");
animation(divElement, 300, 15, callback);
animation(spanElement, 200, 15, callback);