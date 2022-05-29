var name = "test";
var age = 18;

function get(a, b) {
    return a + b;
};




// `export`不仅可以导出对象，一切js变量都可以导出。比如，基本类型变量，函数，数组，对象
export { name, age, get };