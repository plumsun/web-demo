// 封装动画函数
export function animation(domObj, target, timeout, callback, isLeft = null) {

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
                callback(isLeft);
            }
        }else {
            domObj.style.left = domObj.offsetLeft + number + "px";

        }
    }, timeout);
}
