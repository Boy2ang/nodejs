var http = require('01/code/11-http')
//1.创建server
var server = http.createServer();

//2.监听request请求事件,设置请求处理函数
server.on('request',function (req,res) {

    //请求需要服务器的地址+端口号
    console.log('收到请求了,请求路上是:'+req.url)

    //响应也需要客户端地址+端口号,response高度封装了,会自动返回数据给客户端
    console.log('请求我的客户端的地址是:',req.socket.remoteAddress,req.socket.remotePort)

    //req.url获取到的是端口号之后的一部分
    //所有的url都是以/开头的


    var url = req.url

    if (url === '/') {
        res.end('index page')
    }else if (url === '/login') {
        res.end('login page')
    }else if(url==='/product'){
        var products = [
            {
                name:'苹果',
                price:8888
            },
            {
                name:'华为',
                price:6666
            },
            {
                name:'三星',
                price:7777
            }
        ]

        //将json对象转为json字符串
        var productsJson = JSON.stringify(products)


        //end中只能响应string or Buffer(字符串或者二进制)
        //res.end(44)
        res.end(productsJson)

    }else{
        res.end('404 Not Found')
    }



})

//绑定端口,启动服务
server.listen(80,function () {
    console.log('服务器启动成功,可以访问了...')
})