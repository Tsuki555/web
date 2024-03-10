var fs=require("fs")
var rs=fs.createReadStream("./a.txt","utf-8")
rs.on("data",(chunk)=>{
    console.log(chunk);
})
rs.on("end",()=>{
    console.log("end");
})
rs.on("error",(err)=>{
    console.log(err);
})