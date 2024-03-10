const { log } = require("console");
var http = require("http")
http.createServer((req, res) => {
    //console.log(req.url);//表示端口后面的地址，即表示http://localhost:3001/home后面的/home
    // req.url表示从浏览器端传递给服务器端的地址参数
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write(renderHtml(req.url))
    function renderHtml(url) {//定义一个函数根据地址判断页面
        switch(url){
            case "/home":
                return `
                <html>
                    <b>这是首页</b>
                </html>
                `
            case "/list":
                return `
                <html>
                    <i>这是list页面</i>
                </html>
                `
            default :
                return `
                <html>
                    <i>不存在</i>
                </html>
                `
        }
    }
}).listen(3001, () => { console.log("server_001"); })