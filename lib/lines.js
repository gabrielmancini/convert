const Stream = require('stream').Transform
function Lines (options) {
  if (!(this instanceof Lines)) return new Lines(options)

  Stream.call(this, options)
  return this
}
Lines.prototype = Object.create(Stream.prototype)
Lines.prototype._transform = function (chunk, enc, cb) {
  var data = chunk.toString()
  if (this._lastLineData) data = this._lastLineData + data

  var lines = data.split('\n')
  this._lastLineData = lines.splice(lines.length - 1, 1)[0]

  lines.forEach(this.push.bind(this))
  cb()
}

module.exports = Lines
