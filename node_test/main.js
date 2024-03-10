var uniq=require("uniq")

var m1=require("./module_one/module1")
var m2=require("./module_one/module2")
var m3=require("./module_one/module3")

m1.show()
console.log(m2.arr);
console.log(m2.str);
m3.fn()
console.log(uniq(m2.arr));