var fs=require("fs")
var ws=fs.createWriteStream("./b.txt","utf-8")
ws.write("杨媛媛")
ws.write("张源")
ws.write("王晓娜")
ws.write("李潇")
ws.write("武艳芳")
ws.end()