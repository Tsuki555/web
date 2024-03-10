var fs=require("fs")
fs.mkdirSync("./avatar")//同步，会阻塞后方代码执行
fs.writeFileSync("./avatar/a.txt","你好")
//在执行下方代码前上方代码执行完成