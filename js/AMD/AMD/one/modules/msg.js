define([
    'data',//依赖的模块
    "jquery"//需要哪个模块就引用那个模块
], function(data,jquery) {
    var abc=231
    function depend_on() {
        console.log(data.name);

    }
    $("body").css("backgroundColor","red")
    return {depend_on}
    
});//有依赖的模块

//函数和变量需要暴露，但是部分功能不用暴露。存在引用关系即会显示