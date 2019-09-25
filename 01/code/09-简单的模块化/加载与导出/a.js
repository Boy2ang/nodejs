
//require 方法有两个作用
    //1.加载文件模块并执行里面的代码
    //2.拿到被加载文件模块导出的接口对象
        //在每个文件模块中都提供了一个对象:exports
        //你要做的就是把所有需要被外部访问的成员挂载到这个exports对象中


var bExports = require('./b')

console.log(bExports)

console.log(bExports.foo1)

console.log(bExports.foo12)

console.log(bExports.add(10,30))

//对比核心模块
bExports.readFile('c:./a.js',function () {

})

//核心api实现的原理就是如此,只是源码隐藏了
var fs = require('fs')
fs.readFile('./a.js',function (err,data) {
    if(err){
        console.log('读取文件失败')
    }else{
        console.log(data.toString())
    }
})