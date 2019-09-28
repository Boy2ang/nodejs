//1.结合fs 发送文件的数据(nodejs不能像tomcat那样直接发个文件)
//2.Content-Type 类型
//    http://tool.oschina.net/commons
//    不同的资源对应的 Content-Type 是不一样的
//    图片不需要指定编码
//    一般只为字符数据才指定编码
var http = require('http')
var fs = require('fs')
var server = http.createServer()

server.on('request',function (req,res) {
    //获取端口后的路径
    var url = req.url;

    if (url==='/index') {
        fs.readFile('./resource/index.html',function (err, data) {
            if (err) {
                res.setHeader('Content-Type','text/plain;charset=utf-8')
                res.end('文件读取失败,请稍后再试!')
            }else {
                //data默认是二进制数据
                //res.end()支持二进制数据和字符串
                res.end(data)
            }
        })
    }else if(url === '/baby'){
        fs.readFile('./resource/ab2.jpg',function (err,data) {
            if (err) {
                res.setHeader('Content-Type','text/plain;charset=utf-8')
                res.end('文件读取失败,请稍后重试!')
            }else{
                //图片不需要知道编码,这儿指定了也没报错
                res.setHeader('Content-Type','image/jpeg;charset=utf-8')
                res.end(data)
            }
        })
    }





})

server.listen(3000,function () {
    console.log('Server is running!')
})

