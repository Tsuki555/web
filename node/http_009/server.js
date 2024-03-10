var http=require("http")
var https=require("https")
var url=require("url")

http.createServer((req,res)=>{
    res.writeHead(200, {
        "Content-Type": "application/json;charset=utf-8",
        "access-control-allow-origin": "*"
    })
    var name = url.parse(req.url).pathname
    switch (name) {
        case '/list':
            httppost((data)=>{
                res.end(data)
            })
            break;
    
        default:
            break;
    }
}).listen(3006,()=>{
    console.log("成功");
})

function httppost(callback) {
    var data=""
    var options={
        hostname:"a.game.163.com",//域名
        port:"443",//端口号，http默认80，https默认443
        path:"/fz/interface/frontend/fz.do?pos=yinyangshi(g37)-dingtiao-214014,tongyong-lunhuan-670517",//完整的路径地址以及参数
        method:"POST",
        headers:{
            "Content-Type":"application/json"//限定数据格式
        }
    }
    var req=https.request(options,(res)=>{
        res.on("data",(chunk)=>{
            data+=chunk
        })
        res.on("end",()=>{
            callback(data)
        })
    })
    req.write("pos=yinyangshi(g37)-dingtiao-214014,tongyong-lunhuan-670517")//响应参数
    req.end()

}