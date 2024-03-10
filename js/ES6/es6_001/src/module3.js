/* 默认暴露
    可以暴露任何数据，暴露什么数据就接受什么数据,默认暴露只能写一次，许多数据可以用对象管理
*/



export default {
    msg:"默认暴露",
    fun(){
        console.log(this.msg);
    }
}

