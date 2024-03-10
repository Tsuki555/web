

(function () {
    requirejs.config({
        /* 方式1 */
        // baseUrl: "modules/",//设置模块的起始路径
        // paths:{
        //     data: "data",//默认会加.js
        //     msg: "msg",
        // }
        /* 方式2 */
        paths: {//直接相对于主js文件找模块路径
            data: "./modules/data",//依赖模块的路径
            msg: "./modules/msg",
            jquery:"./libs/jQuery"
            /* data就表示./modules/data.js */
        } 
    })
    requirejs(["msg"], function (msg) {//依赖关系会自动去找，所以只引入msg即可，引入最顶层模块即可
        msg.depend_on()//没有依赖
        console.log(msg.abc);//undefined
    })
})()
//jQuery内部支持amd规范，jQuery内部自定义模块名字jquery

// jQuery源码
// if ( typeof define === "function" && define.amd ) {
// 	define( "jquery", [], function() {
// 		return jQuery;
// 	} );
// }