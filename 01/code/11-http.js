var http = require('http')
var server = http.createServer()

server.on('request',function (req,res) {
    //服务器默认发送的数据是utf8编码的内容
    //浏览器不知道的情况会以当前操作系统的编码去解析,中文操作系统默认gbk
    //告诉浏览器发送的内容的编码类型
    res.setHeader('Content-type','text/plain;charset=utf-8')
    res.end('hello 世界')


})

server.listen(3000,function () {
    console.log('Server is running!')
})

