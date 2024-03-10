(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var module1 = require("./module1"),
    module2 = require("./module2"),
    module3 = require("./module3")
module1.fun()
module2.fn()
console.log(module3.fun);
// 默认require命令在node端使用，但是在浏览器端不可用，必须通过命令设置后才能使用
//browserify js/src/app.js -o js/dist boundle.js
// -o表示output
//-o左侧表示要作用的文件，-o右侧表示作用后输出的文件名称以及路径

},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
module.exports={
    msg:"this is module1",
    fun:function(){
        console.log(this.msg);
    }
}
},{}],3:[function(require,module,exports){
exports.fn=function(){
    console.log("这是模块2");
}
},{}],4:[function(require,module,exports){
exports.fun="这是函数的名字"
},{}]},{},[1]);
