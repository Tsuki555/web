// 给$添加方法
$.extend({
    min: function (a, b) {
        return a < b ? a : b;
    },
    max:function(a,b){
        return a<b?b:a
    }
})
// 给$()添加方法
$.fn.extend({
    checkall:function(state){
        if (state) {
            this.prop("checked",true)//此处的this指的是jQuery对象，谁调用this就指向谁
        }else{
            this.prop("checked",false)
        }
         
      
        
    },
    nocheckall:function(){
        this.prop("checked",false)
    },
    resve_check:function(){
        this.each(function(){//此处的this指的是jQuery对象

            this.checked=!this.checked
        })
    }
})