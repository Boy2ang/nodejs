
var data = 'bbb'

//console.log(exports)

exports.foo1='666'
exports.foo12=data

exports.add = function (x, y) {
    return x+y
}

exports.readFile = function (path, callBack) {
    console.log('文件路径',path)
}