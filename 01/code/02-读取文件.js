//浏览器中的JavaScript是没有文件操作的能力的
//但是node中的JavaScript具有文件操作的能力

//fs是 file-system的简写 文件系统
//在node中 如果想要进行文件操作,就必须引用fs这个核心模块
//fs提供了所有文件操作相关的api

//1.使用require 方法加载fs核心模块
var fs = require('fs')
//2.读取文件
//参数 文件路径 回调函数
//成功
//    data  数据
//    error null
//失败
//    data  null
//    error 错误对象
fs.readFile('./data/hello1.txt',function(error,data){
    //<Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 6a 73 0d 0a e4 bd a0 e5 a5 bd 2c 6e 6f 64 65 6a 73 e9 b8 ad 21>
    //文件中存储的其实都是二进制数据 0 1
    //这儿是二进制转为了16进制
    //通过toString方法转换
    //console.log(data)
    // console.log(error)

    if(error){
        console.log('读取文件失败')
    }else{
        console.log(data.toString())
    }

    
})