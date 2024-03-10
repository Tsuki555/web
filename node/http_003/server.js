// 创建http模型方式2
var http=require("http")
var url=require("url")
var server=http.createServer()
server.on("request",(req,res)=>{
    // console.log(url);
  
    // console.log(url.parse(req.url).pathname);
    //url模块的地址解析方法parse，解析浏览器传到服务器地址信息（req.url直接获取到的包括地址信息以及其后的参数信息）
    // console.log(url.parse(req.url));
    // console.log(url.parse(req.url,true));
    // console.log(url.parse(req.url,true).query.name);
    console.log(req.url);

})
server.listen(3002,()=>{
    console.log("sever");
})