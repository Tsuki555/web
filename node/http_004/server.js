var http = require("http")


http.createServer((req, res) => {
    // var myurl=new URL("/foo","https://example.org/")
    const myurl = new URL(req.url, "http://127.0.0.1:3003")
    console.log(myurl);
    /* URL {
  href: 'http://127.0.0.1:3003/home?a=99&b=1024',
  origin: 'http://127.0.0.1:3003',
  protocol: 'http:',
  username: '',
  password: '',
  host: '127.0.0.1:3003',
  hostname: '127.0.0.1',
  port: '3003',
  pathname: '/home',
  search: '?a=99&b=1024',
  searchParams: URLSearchParams { 'a' => '99', 'b' => '1024' },
  hash: ''
} */
    console.log(req.url);//req.url包含地址信息以及参数
}).listen(3003, () => {
    console.log("sever");
})