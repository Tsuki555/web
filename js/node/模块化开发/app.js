//将其他的模块汇集到主模块
var uniq=require("uniq")//引入第三方库必须在自定义库前面，第三方库通过包名引入即可
var module1=require("./module/module1")//自定义库通过路径引入
var module2=require("./module/module2")
var module3=require("./module/module3")


module1.fun()
module2.fun()
module3.fun()
console.log(uniq(module3.arr));