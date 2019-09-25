//几个服务级别的API,详情见nodejs官网 http://nodejs.cn/api/

//用来获取机器信息
var os = require('os')

//用来操作路径
var path = require('path')

//用来获取当前机器的cpu信息
console.log(os.cpus())

//memory 内存
console.log(os.totalmem())

//获取文件的扩展名
console.log(path.extname('F:\\Download\\百度云下载\\nodejs资料（7天）\\01\\README.md'))