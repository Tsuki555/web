// // const myself=require("myself")
// // console.log(myself);
// const minimist=require("minimist")
// console.log(minimist(process.argv));//将数组转化为对象


// console.log(process.env.NODE_ENV);//环境变量中参数
// // 环境判断
// let url=""

// if (process.env.NODE_ENV.trim()=="dev") {
//     url="http://dev.com"
// }else if(process.env.NODE_ENV.trim()=="test"){
//     url="http://test.com"
// }else if(process.env.NODE_ENV.trim()=="pro"){
//     url="http://pro.com"
// }
// console.log(url);


// const os=require("os")
// console.log(os.cpus().length);//查看cpu核数
// console.log(os.totalmem()/(1024*1024*1024));//查看内存大小，默认单位字节，转化为G
// console.log(os.freemem()/(1024*1024*1024));//查看剩余内存大小，默认单位字节，转化为G


// const path=require("path")
// const filepath="c:/a/b/c/d/file.js"
// console.log(path.basename(filepath));//获取路径中的文件名  file.js
// console.log(path.dirname(filepath));//获取路径分隔符最后一位前的所有  c:/a/b/c/d
// console.log(__filename);//获取当前执行脚本的文件路径，包括文件名称   F:\web\nodejs_niuzi\one\main.js
// console.log(__dirname);//获取当前执行脚本的文件路径，不包括文件名称  F:\web\nodejs_niuzi\one
// console.log(path.extname(filepath));//获取文件后缀名 .js



// var url=require("url")
// var requrl="http://www.xxx.com/index.html?id=100&dd=于静楠#aa"
// var obj=url.parse(requrl,true)//url地址解析方法parse
// //参数1：url地址
// //参数2：布尔值，默认为false，不将search字符串转化为对象；true，将search字符串转化为对象。改变的是query的值为对象还是字符串
// console.log(obj);




// var querystring=require("querystring")
// var str="id=1&name=王晓娜&age=24"
// console.log(querystring.parse(str));
// //[Object: null prototype] { id: '1', name: '王晓娜', age: '24' }
// //字符串转对象

// console.log(querystring.stringify({id:99,www:"数据"}));
//对象转字符串

// var url=require("url")
// var requrl="http://www.xxx.com/index.html?id=100&name=wxn#aa"
// var obj=new URL(requrl)
// console.log(obj);
// // URL {
// //     href: 'http://www.xxx.com/index.html?id=100#aa',
// //     origin: 'http://www.xxx.com',
// //     protocol: 'http:',
// //     username: '',
// //     password: '',
// //     host: 'www.xxx.com',
// //     hostname: 'www.xxx.com',
// //     port: '',
// //     pathname: '/index.html',
// //     search: '?id=100',
// //     searchParams: URLSearchParams { 'id' => '100' },
// //     hash: '#aa'
// //   }
// console.log(obj.pathname);/* /index.html */
// console.log(obj.searchParams)/* URLSearchParams { 'id' => '100', 'name' => 'wxn' }*/
// console.log(obj.searchParams.get("id"));/* 100 */
// console.log(obj.searchParams.get("name"));/* wxn */

// console.log(Object.fromEntries(obj.searchParams));//{ id: '100', name: 'wxn' }转化为对象



// const fs=require("fs")
// const path=require("path")
// // 操作fs肯定需要路径
// var filpath=path.resolve("./img/1.jpg")//F:\web\nodejs_niuzi\one\img\1.jpg
// //resolve根据路径读取文件
// console.log(filpath);
// // 读取文件 在不指定编码情况下返回一个buffer流
// //（buffer流是一个容器，一般用于存储数据流。终端只能显示16进制，因此只能二进制流转16进制流）
// var data=fs.readFileSync(filpath)//同步
// //根据路径读文件
// console.log(data);
// /* <Buffer 52 49 46 46 90 2b 00 00 57 45 42 50 56 50 38 20 
// 84 2b 00 00 d0 b3 01 9d 01 2a 20 03 f4 01 3e 91 46 9b 4a 25 
// b6 b8 26 a7 53 ba 4b 00 12 09 67 6e 88 84 ... 11110 more bytes> */
// var fp=path.resolve("./img/one.txt")
// var data1=fs.readFileSync(fp,"utf-8")//编码方式
// console.log(data1);//圣诞节鬼故事



// const fs=require("fs")
// const path=require("path")
// var filpath=path.resolve("./img/1.jpg")
// var fp=path.resolve("./img/one1.txt")
// // nodejs中错误优先原则，回调函数中，第一个参数永远给错误对象
// fs.readFile(fp,"utf-8",(err,data)=>{//readFile异步
//     if (err) {
//         console.log("读取文件异常");
//     } else {
//         console.log(data);
//     }
// })



// const fs=require("fs")
// const path=require("path")
// /* 定义写入文件路径 */
// var filepath =path.resolve("./img/two.txt")
// //文件存在，覆盖写入
// //文件不存在，新建文件并写入
// var data="I love wxn"
// fs.writeFileSync(filepath,data)//同步   writeFileSync新建写入，覆盖写入
// fs.appendFileSync(filepath,"   fall in love")//appendFileSync追加写入

// const fs=require("fs")
// const path=require("path")
// var data="我离不开你，王晓娜"
// var filepath =path.resolve("./img/three.txt")
// fs.writeFile(filepath,data,(err)=>{
//     console.log("错误信息");
// })
// const fs=require("fs")
// const path=require("path")
// var src=path.resolve("./img/two.txt")
// 查看当前文件异步信息
// fs.stat(src,(err,stat)=>{
//     console.log(stat);
//     console.log(stat.mtime);//文件修改时间
//     console.log(stat.size);//文件大小
//     console.log(stat.isDirectory());//是否为目录
//     console.log(stat.isFile());//是否为文件
    
// })
// Stats {
//     dev: 2688634686,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: 4096,
//     ino: 1970324837893669,
//     size: 25,
//     blocks: 0,
//     atimeMs: 1709101574005.0771,
//     mtimeMs: 1709101574005.0771,
//     ctimeMs: 1709101574005.0771,
//     birthtimeMs: 1709101177586.7036,
//     atime: 2024-02-28T06:26:14.005Z,
//     mtime: 2024-02-28T06:26:14.005Z,//修改文件时间
//     ctime: 2024-02-28T06:26:14.005Z,
//     birthtime: 2024-02-28T06:19:37.587Z
//   }

// if (fs.existsSync(src)) {//existsSync检查文件是否存在，文件存在为true，文件不存在为false
//     console.log("文件存在");
//     fs.unlinkSync(src)//删除文件
// }



// const fs=require("fs")
// const path=require("path")
// var src=path.resolve("../one/src/icon")//路径
// // fs.mkdirSync(src,{recursive:true})//创建文件夹,多层文件夹
// // fs.rmSync(src,{recursive:true})//删除文件和目录,删除的是最下层的文件夹以及内部文件
// // 读取文件夹下文件列表
// var list=fs.readdirSync(src)
// console.log(list);//[ 'abc.txt', 'hello.html' ]



// events模块是node对发布订阅模式的实现，加载events模块后，
// 通过EventEmitter属性建立了一个EventEmitter对象实例，这个实例就是消息中心，
// 然后，通过on方法为事件指定回调函数，最后通过emit方法触发事件。


// const EventEmitter=require("events")
// const events=new EventEmitter()

// //先订阅后发布

// //订阅事件
// events.on("下课",arg=>{
//     console.log(arg);
// })
// // 事件发布
// events.emit("下课","吃饭喽")

const http=require("http")
const port=3000//端口
// 创建一个服务器，等待客户端请求
const server = http.createServer()

//request   请求对象，获取客户端请求发送过来的数据
//response   响应对象，对应请求客户端发送响应的数据
//监听客户端请求
server.on("request",(request,response)=>{
    response.end("ok")
})
//绑定端口
// 参数1 端口号
// 参数2 可选，如果不写，他在请求获取IP地址时候会以ipv6来统计，所以要写
//0.0.0.0表示该服务绑定到所有本机网卡上，本地任何IP地址都可以访问
//1270.0.1表示只能固定ip地址访问，一般公司内部使用固定ip
// 参数3 
server.listen(port,"0.0.0.0",()=>{
    console.log("启动服务");
})


