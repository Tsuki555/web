// // const m1=require("m1")
// const $=require("jquery")
// // const m2=require("m2/two")

// console.log("hello nodejs");
// console.log(m1);
// console.log(m2.num);
//内置模块process，获取命令行（node .\hello.js --port 666 --host 127.0.0.1）中参数

// [
//     'D:\\nvmnodejs\\nodejs\\node.exe',
//     'F:\\web\\nodejs_niuzi\\one\\hello.js',
//     '--port',
//     '666',
//     '--host',
//     '127.0.0.1'
//   ]
// console.log(process.argv);//打印的是数组

// 使用minimist模块
const minimist=require("minimist")
console.log(minimist(process.argv));//将数组转化为对象

// const mself=require("mself")
// console.log(mself.data);

