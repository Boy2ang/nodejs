# Node.js 第二天
## 总结
- 服务端渲染
  + 在服务端使用模板引擎
  + 模板引擎最早诞生于后端,后来才发展到了前端
- 服务端渲染和客户端渲染的区别
  + 客户端渲染不利于SEO搜索引擎优化(说白了就是搜索引擎很难收到)
  + 服务端渲染是可以被爬虫抓取到的,客户端异步渲染是很难被爬虫抓取到的(ajax)
  + 浏览器按f12审查元素能搜到的就是服务端渲染,搜不到的就是客户端渲染
  + 例如京东首页的商品为服务端渲染,目标让搜索引擎能搜到,浏览器控制台也能直接看到商品信息
  + 而商品评论列表为客户端渲染,速度快,不需要被搜索,浏览器审查元素看不到
  + 所以真正的网站既不是纯异步也不是纯服务端渲染出来的
  + 而是两者结合来做的
- 关于JSP
  + jsp有tomcat解析成servlet,如果是静态文件,想html,js,css等,转化成字符串通过write方法原样输出给客户端
  + 其他的如<%..%>,就将其中的内容按原样插入servlet源代码中
  + <=%...%>形式：JSP引擎遇到这种形式，并不是把其中的内容直接放到Serclet源程序中，而是通过print方法将”=”后面的内容输出到客户端
  + JSP指令：%@page...%就是一个JSP的page指令。对于这中形式，JSP引擎按照指令类型和它的属性翻译成相应的Java代码。
  + <%=request.getParameter("username")%>  等价于  ${ param.username }
  + jsp总结
    - jsp:是后端渲染model,如作用域${user}等,前端通过js渲染,如<script>中ajax请求数据
    - 比如springmvc渲染视图,指的是将model数据放在view(jsp)中,仅仅是填充${作用域}的数据
    - 而js静态数据是服务器返回给浏览器后,浏览器再次向服务器发起请求而得到动态数据的
    - 终于也理解了作用域是属于服务器,script属于客户端操作这一说法