//复制文件方式  
//读写流
var fs=require("fs")
var rs=fs.createReadStream("./1.txt")

var ws=fs.createWriteStream("./2.txt")

rs.pipe(ws)//通过管道控制传输