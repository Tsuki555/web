

(function(){
    requirejs.config({
        paths:{
            data:"./modules/data",
            msg:"./modules/msg",
            jquery:"./node_modules/jquery/dist/jquery"
        }
    })
    requirejs(["msg","data","jquery"],function( msg,data){
        msg.fn()
        data.fn()
        console.log(msg.name);
        $("body").css("backgroundColor","yellow")
    })
})()