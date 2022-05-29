// const util = {
//     sum(a,b){
//         return a+b;
//     }
// };

// 导出默认对象，当使用import导入时没有名字限制
export default {
    sum(a, b) {
        return a + b;
    }
}



// `export`不仅可以导出对象，一切js变量都可以导出。比如，基本类型变量，函数，数组，对象
// export { util };


