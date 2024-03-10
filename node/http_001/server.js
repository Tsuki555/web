// var http = require("http")
// // 创建服务器

// http.createServer((req,res)=>{
//     //接收浏览器传的参数 返回渲染的内容
//     //req是接收浏览器传入的参数
//     //res返回渲染内容

// }).listen(端口号,()=>{//listen监听
//     // 服务器成功该回调函数调用
// })

// // 手动重启服务，ctrl+c关闭服务，再次执行node server.js命令重启服务



var http = require("http")
// 创建服务器

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})//设置响应头，文本展示类型设置
    // 200表示http状态码
    // {"Content-Type":"text/plain"}响应为普通文本
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    //{"Content-Type":"text/html"}响应为html
    //{"Content-Type":"text/html;charset=utf-8"}响应为html,编码类型为utf-8
    res.write("hello world")
    res.write("逍遥哥哥")//对于中文会乱码
    res.write(`
        <html>
            <b>加粗了</b>
        </html>
    `)
    res.end()

}).listen(3000,()=>{//listen监听
    console.log("server");
})

// 手动重启服务，ctrl+c关闭服务，再次执行node server.js命令重启服务
