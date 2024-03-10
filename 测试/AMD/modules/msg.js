define([
    "data"//依赖的模块
], function (data) {
    var name="北京大学"
    function fn() {
        console.log(data.name);
    }
    return {fn,name}
});