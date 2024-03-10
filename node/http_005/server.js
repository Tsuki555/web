
var querystring=require("querystring")
var str="name=wxn&age=24&school=gsxy"
var obj=querystring.parse(str)//字符串转对象
console.log(obj);
var mystr=querystring.stringify(obj)//对象转字符串
console.log(mystr);

var escaped=querystring.escape(mystr)//编码
console.log(escaped);

var unescaped=querystring.unescape(escaped)//解码
console.log(unescaped);