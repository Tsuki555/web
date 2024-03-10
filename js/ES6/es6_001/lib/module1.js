"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fun = fun;
exports.fun2 = fun2;
function fun() {
    console.log("this is fun()");
} //暴露函数
function fun2() {
    console.log("this is fun2()");
} //暴露函数
var str = exports.str = "牛逼牛逼"; //暴露一个变量

/* 分别暴露 */