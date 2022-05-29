// 导入其他js中导出的对象
import { name, age, get } from "./user";
import { util } from "./hello";

// 引用导入的对象
util.sum(1, 3);
console.log(name, age);
get(1, 2);