"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* 默认暴露
    可以暴露任何数据，暴露什么数据就接受什么数据,默认暴露只能写一次，许多数据可以用对象管理
*/

exports.default = {
    msg: "默认暴露",
    fun: function fun() {
        console.log(this.msg);
    }
};