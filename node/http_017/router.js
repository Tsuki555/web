
var fs=require("fs")

function render(res,path) {
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8;"})//text/html表示解析html文档
    res.write(fs.readFileSync(path),"utf-8")
    res.end()
}
var router={
    //以对象形式写路由，当路径与key值对应调用回调函数
    "/home":(req,res)=>{//甭管用不用，req得写
        render(res,"./index.html")
    },
    "/list":(req,res)=>{
        render(res,"./list.html")
    },
    "/404":(req,res)=>{
        render(res,"./404.html")
    }
}
module.exports=router