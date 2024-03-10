function render(res,data) {
    res.writeHead(200,{"Content-Type":"application/json;charset=utf-8;"})//text/html表示解析html文档
    res.write(data,"utf-8")
    res.end()
}
var url=require("url")
var apiRouter={
    "/api/login":(req,res)=>{
        //获取参数
        var myurl=new URL(req.url,"http://127.0.0.1")
        console.log(myurl);
        // render(res,myurl)
    }
}
module.exports=apiRouter

//写接口