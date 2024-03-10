// 简化jQuery

(
    function () {
        function jQuery() {//局部函数

        }
    window.jQuery = window.$ = jQuery;//把jQuery挂载到window下
    }
)()
//匿名函数自执行：内部所有的变量都是局部的
//匿名函数对外提供接口:把jQuery挂载到window下