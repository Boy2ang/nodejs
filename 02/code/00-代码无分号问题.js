function say(){
    console.log('hello world')
}

say()

;['苹果','香蕉'].forEach(element => {
    console.log(element)
})

// ` 是EcmaScript 6中新增的一种字符串包裹方式,叫做:模板字符串
//他支持换行和非常方便拼接变量(键盘Esc下面)

var foo = `
嘻嘻嘻
    哈哈哈
        啦啦啦
` 
console.log(foo)

// ;`hello`.toString()
// !`hello`.toString()
// !`hello`.toString()
// &`hello`.toString()
// ^`hello`.toString()
// *`hello`.toString()



//匿名自启动
;(function(){
    console.log('hellow')
})()

//当采用无分号的代码风格时,需要注意以下三处,就不会发生问题
/**
 * 当一行代码是以:
 *  (
 *  [
 *  `
 * 开头的时候,就需要在前面补上一个分号避免一些语法解析错误
 * 所以你会发现在一些第三方的代码中能看到一上来就以一个;开头的.js文件,如这儿的main.js
 * (有人还喜欢用!,~,&等这种符号)
 * 总之,如果有一行代码是以(,[,`开头的,无论你的代码风格是否有分号,建议都在那行最前面补上分号
 */

