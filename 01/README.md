### Node.js第一天
- nodejs是什么
  + node.js is a javascript runtime build on chrome'sV8 javascript engine.
  + 不是一门语言,不是库,不是框架,是一个JavaScript运行时环境.
  + 简单点来讲node.js可以解析和执行JavaScript代码,以前只有浏览器可以解析执行javas代码,现在的JavaScript可以脱离浏览器来运行
 
- 浏览器中的JavaScript
  + Ecmascript
    + 基本语法
    + if
    + var
    + function
    + Object
    + Array
    * Date
    * Math
    
  + BOM
  + DOM
  
  
- Node.js中JavaScript
  + 没有BOM 和 DOM
  + EcmaScript
  + 模块系统
    * 在Node中没有全局作用域的概率
    * 在Node中,只能通过require 方法来加载执行多个JavaScript 脚本文件
    * require 加载只能是执行其中的代码,文件与文件之间由于是模块作用域,所有不会有污染的问题
      * 模块完全是封闭的
      * 外部无法访问内部
      * 内部也无法访问外部
    * 但是某些情况下,模块与模块是需要通信的
    * 在每个模块中,都提供了一个对象:`exports`
    * 该对象默认是一个空对象
    * 你要做的就是把需要被外部访问使用的成员手动的挂在到`exports`接口对象中
    * 然后谁来`require`这个模块,随就可以得到模块内部的`exports`接口对象
    * 还有一些其他的规则,后续再讲
      + 核心模块  
        * 核心模块是由Node 提供的一个个具名的模块,他们都有自己特殊的名称标识,比如:
        * fs 文件操作模块
        * http 网络服务构建模块
        * os 操作系统信息模块
        * path 路径处理模块
        * ....
        * 所有核心模块在使用的时候都必须手动的先试用`require`方法来加载,然后才可以使用,例如:
          * `var fs = require('fs')`
      
     
    



    

