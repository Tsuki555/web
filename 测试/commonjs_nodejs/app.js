/* 服务器端实现 */
var uniq = require("uniq")

var m1 = require("./module/module1")
var m2 = require("./module/module2")
var m3 = require("./module/module3")
var m4 = require("./module/module4")

m1.fun()
m2.fun()
m3.fun()
console.log(m3.arr);
console.log(uniq(m3.arr));
m4.fun()
console.log(m4.name);
