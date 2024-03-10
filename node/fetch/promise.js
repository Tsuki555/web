// 手写promise对象
/* 定义promise对象 */

/* Promise是一个构造函数，new Promise(exexcutor)实例化一个promise对象 ,
exexcutor是一个执行器函数，生成值是一个promise对象*/

var wait = (ms) => {
    new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}
/* 调用promise对象 */
/* 调用promise对象的方法then()和catch() */
wait(3000).then(() => console.log("成功")).catch(()=>{console.log("失败");})