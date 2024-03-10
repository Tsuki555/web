var crypto=require("crypto")
var hash=crypto.createHash("md5")

hash.update("hello world")//把hello world转化为md5数据格式

console.log(hash.digest("hex"));//设置转换后数据显示为那种数据格式，hex表示16进制