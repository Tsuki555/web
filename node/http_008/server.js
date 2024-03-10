var http = require("http")
var url = require("url")
var https = require("https")

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json;charset=utf-8",
        "access-control-allow-origin": "*"
    })
    var name = url.parse(req.url).pathname
    console.log(name);
    switch (name) {
        case "/home":
            //作为客户端去扣扣音乐的客户端要数据（第三方）
            httpget(res)
            break;

        default:
            res.end("404")
            break;
    }


}).listen(3152, () => {
    console.log("server");
})


function httpget(response) {
    var data = ""
    https.get(`
    https://y.qq.com/jzt/85eef2/c09576773c59bf23.json?jztid=9518&_=1706160819
    544&cv=4747474&ct=24&format=json&inCharset=utf-8&outCharset=utf-8&notice=
    0&platform=yqq.json&needNewCode=1&uin=0&g_tk_new_20200303=5381&g_tk=5381&
    mesh_devops=DevopsBase`,

        (res) => {//此处的res和调用httpget()传参进入的res是不一样的
            // console.log(res),
            //获取数据过程
            res.on("data", (chunk) => {//引号里的data表示的是res响应内部的data
                data += chunk//此处二data表示的是变量data
            })
            // 最终获取数据
            res.on("end", () => {
                response.end(data)//把数据响应给前端
            })
        }

    )
}
