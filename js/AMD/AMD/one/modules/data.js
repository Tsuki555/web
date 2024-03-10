define(function(){
    var name="没有依赖"
    function name_fn() {
        console.log("name");
    }
    return {name_fn,name}//暴露模块
})//没有依赖的模块