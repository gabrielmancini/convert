var fs = require('fs')
var stack = require('./lib')

stack.flow = function (url, file) {
  stack.req()
    .get(url)
    .pipe(stack.lines())
    .pipe(stack.convert())
    .pipe(fs.createWriteStream(file))
}

module.exports = stack
