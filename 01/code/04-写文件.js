var fs = require('fs')
fs.writeFile('./data/你好.md','大家好,给大家介绍一下,我是Node.js',function(error){
    if (error) {
        console.log('文件写入失败')
    } else {
        console.log('文件写入成功')
    }
})