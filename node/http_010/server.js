var http = require("http")
var https = require("https")
var url = require("url")
var cheerio=require("cheerio")

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json;charset=utf-8",
        "access-control-allow-origin": "*"
    })
    var name = url.parse(req.url).pathname
    switch (name) {
        case '/list':
            httpget((data) => {
                res.end(spider(data))
            })
            break;

        default:
            break;
    }
}).listen(3005, () => {
    console.log("成功");
})

function httpget(callback) {
    var data =""
    https.get(`https://v.qq.com/x/cover/mzc00200whsp9r6/v0047u4dyt6.html`,(res)=>{
        res.on("data",(chunk)=>{
            data+=chunk
        })
        res.on("end",()=>{
            callback(data)
        })
    })
}

function spider(data) {
    // cheerio模块解析数据
    
    let msg=cheerio.load(data)//使用cheerio模块分析数据
    console.log(msg);
    // msg_video=msg(".channel-nav-text")//根据类名获取数据
    // console.log(msg_video);
    // return msg_video

}