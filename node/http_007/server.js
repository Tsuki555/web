var http=require("http")
var url=require("url")
var $=require("jquery")

//解决跨域
/* 
    当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域。
    前端项目和后端的域名，接口不一致导致的跨域问题
 */

//写接口
http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-type":"application/json;charset=utf-8",
        // cros头,解决跨域问题
        // 在express框架里使用cros模块解决跨域
        "access-control-allow-origin":"*"//允许所有的域通过控制
    })
    var urlobj=url.parse(req.url)
    switch(urlobj.pathname){
        case "/home":
            //访问该接口获得一段字符串
            res.write(`
            {
                "name":"wxn",
                "age":24
            }
            `)
            res.end()
        break;
    }
}).listen(3004,()=>{
    console.log("sever");
})