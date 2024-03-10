var http=require("http")
var fs=require("fs")
var zlib=require("zlib")


var zip=zlib.createGzip()
http.createServer((req,res)=>{
    var rs=fs.createReadStream("./a.txt")//可读流
    res.writeHead(200,{"Content-Type":"application/x-javascript;charset=utf-8;","Content-Encoding":"gzip"})
    //"Content-Encoding":"gzip"防止压缩后乱码
    rs.pipe(zip).pipe(res)//可写流,写之前进行一个压缩
}).listen(3000,()=>{
    console.log("server");
})