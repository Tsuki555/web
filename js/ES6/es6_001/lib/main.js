"use strict";

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _module = require("./module1");

var _module2 = require("./module2");

var _module3 = require("./module3");

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//默认暴露,引入时候名字可以随意起

//使用对象解构赋值引入时候名字不可以随意起，一一对应
// import xxx from "路径"


/* 
import module1 from "./module1"
import module2 from "./module2" 
import module3 from "./module3"
这种写法打印是undefined
console.log(module1);
console.log(module2);
console.log(module3);
*/
(0, _module.fun)();
// es6规范规定在引入时候必须使用对象解构赋值形式
//引入第三方模块，与默认暴露相似，引号里是包名

(0, _module.fun2)();
(0, _module2.wuhu)();
(0, _module2.bug)();
console.log(_module4.default);
_module4.default.fun();
(0, _jquery2.default)("body").css("backgroundColor", "pink");

// 使用babel将es6转化为es5的命令：  babel src -d lib  
/* 使用browserify编译js：browserify ./lib/main.js -o ./lib/boundle.js 自动创建lib文件夹  */
/* 一般第三方库在整个项目文件夹下安装，在整个项目文件夹下执行相关命令；从对应的项目文件夹下的第一层
开始找地址（即可以理解为从执行npm命令行文件夹以下的第一层文件夹中开始找地址）*/

/* 再次更新boundle.js 方法：
    依次执行：
        babel src -d lib  
        browserify ./lib/main.js -o ./lib/boundle.js
会覆盖之前的
*/