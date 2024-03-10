(function (window) {
    var msg = "这是数据1"
    function fn1() {
        console.log(msg);
    }
    window.dataFn = fn1
})(window)