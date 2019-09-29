var http = require('http');
var fs = require('fs');
var template = require('art-template');

var server = http.createServer();

var wwwDir = 'F:/Document/nodejs/02/code/www';

server.on('request', function (req, res) {

    //读取模板文件的内容
    fs.readFile('./template-apache.html', function (err, data) {
        if (err) {
            return res.end('404 Not Found');
        }

        //读取www文件下的所有文件夹名称
        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('Can not find www dir.')
            }

            //将title,files数据填充到模板字符串中,比如{{title}}会填充'哈哈'
            var htmlStr = template.render(data.toString(), {
                title: '哈哈',
                files: files
            })

            //这儿渲染页面都是服务器完成的
            //填充数据后返回真正的含数据的字符串,返回给浏览器

            res.end(htmlStr);
        })

    })

})

server.listen(3000,function(){
    console.log('running...')
})