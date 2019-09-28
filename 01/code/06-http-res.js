
var http = require('01/code/11-http')


var server = http.createServer()


server.on('request',function(request,response){
    //控制台看请求信息
    //注意:如果请求出现favicon.ico 网站图片,是浏览器发送的请求
    console.log('收到客户端的请求了,请求的路径是:'+request.url)

    //响应  write可以响应多次,但是最后一定要使用end来结束响应,否则客户端会一直等待
    response.write('hello nodejs!')
    response.write('hello nodejs2')
    response.write('finish!')
    response.end();
})


server.listen(3000,function(){
    console.log('服务器启动成功了,可以通过http://localhost:3000/来访问了')
})