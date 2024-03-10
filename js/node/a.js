function test() {
    console.log("test_a");
}
function dy() {
    console.log("打印函数");
}
var num=521
// module.exports=test
// module.exports只能导出一个，导出多个的话组合成为对象再导出


// 导出多个，方式1
// module.exports = { test: test, dy: dy }

// 导出多个，方式2
exports.test = test
exports.dy=dy
exports.num=num

