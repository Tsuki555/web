
var moduleB = require("./b")
var moduleA = require("./a")
var moduleC = require("./c")
console.log(moduleA);
// moduleA()//导出一个函数可以直接调用，导出多个函数不可以
moduleA.dy()
moduleB()
moduleC()
