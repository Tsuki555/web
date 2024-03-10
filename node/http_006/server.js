var http = require("http")
var url = require("url")

http.createServer((req, res) => {
    var myurl = url.parse(req.url).pathname

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write(rander(myurl))
    function rander(myurl) {
        switch (myurl) {
            case "/home":
                return `
                <html>
                    <strong>这是首页</strong>
                </html>
            `
            case "/list":
                return `
                <html>
                    <strong>这是列表页</strong>
                </html>
            `

            default:
                return `
            <html>
                <b>404</b>
            </html>
            `
        }
    }
}).listen(3005, () => {
    console.log("sever");
})