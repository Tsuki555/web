const { log } = require("console");
var fs = require("fs")
// //新建目录，如果目录存在报错
// // fs.mkdir("./avatar",(err)=>{
// //     console.log(err);//报错信息
// // })
// // //修改目录文件夹名
// fs.rename("./avatar","llx",(err)=>{
//     console.log(err);//报错信息
// })
// // // //删除目录文件
// fs.rmdir("./avatar",(err)=>{
//     console.log(err);
// })



// // // 创建文件并写入内容；文件存在重写，写入内容会覆盖文件中之前内容
// fs.writeFile("./llx/a.txt","hello world",(err)=>{
//     console.log(err);
// })
// fs.writeFile("./llx/b.txt","www",(err)=>{
//     console.log(err);
// })
// // //追加写入内容
// fs.appendFile("./llx/a.txt","你好 世界",(err)=>{
//     console.log(err);
// })

// // //读文件
// fs.readFile("./llx/a.txt","utf-8",(err,data)=>{
//     if (!err) {
//         console.log(data);
//     }
// })

// // // fs.unlink("./llx/a.txt",(err)=>{
// // //     console.log(err);
// // // })

//读目录下存在哪些文件
fs.readdir("./llx", "utf-8", (err, data) => {
    if (!err) {
        console.log(data);
        data.forEach((item) => {
            fs.unlink(`./llx/${item}`, (err) => {
                console.log(err);
            })
        })
        fs.rmdir("./llx",(err)=>{
            console.log(err);
        })
    }
})

