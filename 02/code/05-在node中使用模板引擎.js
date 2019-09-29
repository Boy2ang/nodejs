//art-template
//art-template 不仅可以在浏览器使用,也可以在node中使用

// 安装:
// npm install art-template
//改命令在哪执行就会把包下载到哪里.默认会下载到node_nodules目录中
//node_modules不要改,也不支持改

//在Node中使用art-template模板引擎
//模板引擎最早诞生于无服务领域,后来才发展到了前端

// 使用:
//1.使用require方法加载 :  require('art-template')
//  参数中的art-template就是下载的包的名字
//  也就是说你install的名字是什么,则你require中的就是什么
//2.查文档,使用模板引擎的API

//第三方模板引擎模块
var template = require('art-template')
//文件操作模块
var fs = require('fs')

//读取文件中的内容
fs.readFile('./tpl.html', function (err, data) {
    if (err) {
        //这儿的return仅仅启动终止函数,没有返回的意思
        return console.log('读取文件失败!')
    }

    //将{对象信息}填充到字符串data中的{{}}里面,然后返回新的含有数据的字符串
    var ret = template.render(data.toString(), {
        name: 'jack',
        age: 18,
        province: '北京市',
        hobbies: [
            '写代码',
            '唱歌',
            '打游戏'
        ],
        title:'个人信息'
    })

    console.log(ret)

})

