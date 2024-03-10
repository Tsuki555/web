var http=require("http")
var url=require("url")
var api=require("./api")
var router=require("./router")


var Router_one={}
Object.assign(Router_one,router)
Object.assign(Router_one,api)
// console.log(Router_one);
// 创建一个空对象使用assign方法实现对象合并
http.createServer((req,res)=>{
    var myurl=url.parse(req.url).pathname
    
    try {
        Router_one[myurl](req,res)//对对象的操作  
    } catch (error) {
        Router_one["/404"](req,res)//传req是为了参数处理
    }
}).listen(3001,()=>{
    console.log("server");
})