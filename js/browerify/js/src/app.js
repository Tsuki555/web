
var module1 = require("./module1"),
    module2 = require("./module2"),
    module3 = require("./module3")
module1.fun()
module2.fn()
console.log(module3.fun);
// 默认require命令在node端使用，但是在浏览器端不可用，必须通过命令设置后才能使用
/* 在根目录下相关需求 */
//在终端中输入 browserify .\src\app.js -o .\dist\boundle.js
// -o表示output
//-o左侧表示要作用的文件，-o右侧表示作用后输出的文件名称以及路径
