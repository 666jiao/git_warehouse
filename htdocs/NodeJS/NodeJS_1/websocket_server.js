var WebSocketServer = require('ws').Server,  
    wss = new WebSocketServer({  
        port: 3000, //监听接口  
        verifyClient: socketVerify //可选，验证连接函数  
    });  
  
function socketVerify(info){  
    console.log(info.origin);
    console.log(info.secure);
    // console.log(info);
    return true; //否则拒绝  
}  
//广播  
wss.broadcast = function broadcast(s,ws){
    wss.clients.forEach(function(client){  
            if(s==1) client.send(s+"====="+ws.name + "=======" + ws.msg); 
            if(s==0) client.send(ws + "退出聊天室");
    });  
};  
// 初始化  
wss.on('connection',function(ws){
    // 发送消息   
    ws.send('欢迎回来'); 
     
    ws.on('message',function(jsonStr,flags){  
        var obj = eval('(' + jsonStr + ')');  
        // console.log(obj);  
        this.user = obj;  
        if(typeof this.user.msg != "undefined"){  
            wss.broadcast(1,obj);  
        }  
    }); 

    // 退出聊天  
    ws.on('close',function(close){
        try{  
           wss.broadcast(0,this.user.name);
        }catch(e){  
            console.log('刷新页面了');  
        }  
    });  
}); 