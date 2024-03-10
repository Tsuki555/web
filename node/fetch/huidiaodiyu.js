

// function hdhs(url, successCb, errorCb) {
//     setTimeout(() => {
//         if (true) {
//             successCb()
//         } else {
//             errorCb()
//         }
//     }, 2000)
// }
// //回调地狱
// hdhs("111", () => {
//     console.log("ajax成功111");
//     hdhs("222", () => {
//         console.log("ajax成功222");
//         hdhs("333", () => {
//             console.log("ajax成功333");
//         }, () => {
//             console.log("ajax失败");
//         })
//     }, () => {
//         console.log("ajax失败");
//     })
// }, () => {
//     console.log("ajax失败");
// })

function fn1(f2) {
    console.log(777777);
    f2()
 
}
function fn2() {
    console.log(8888888);

}
function fn(f1,f2) {
    console.log(66666); 
    f1(f2)   
}
fn(fn1,fn2)