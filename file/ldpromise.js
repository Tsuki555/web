function ldpromise(executor){
    this.status="pending"// 构造函数this指的是对象实例
    this.result=undefined
    var _this=this;
    
    function resolve(res){
        // this.status="fulfilled"//此处this表示window
        _this.status="fulfilled"
        _this.result=res       
        // console.log(_this);
    }
    function reject(res){
        _this.status="rejected"
        _this.result=res
        // console.log(_this);
    }
    executor(resolve,reject)//执行器执行内部的resolve和reject函数
}
ldpromise.prototype.then=function(success){
    if (this.status=="fulfilled") {
        success(this.result)//执行一次.then调用
    
    }


}

