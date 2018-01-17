const Stream = require('stream').Transform
function Convert (options) {
  if (!(this instanceof Convert)) return new Convert(options)

  Stream.call(this, options)
  this.init = true
  return this
}
Convert.prototype = Object.create(Stream.prototype)
Convert.prototype._transform = function (chunk, enc, cb) {
  if (this.init) {
    this.push('#Version: 1.0\n')
    this.push('#Date: 15/12/2017 23:01:06\n')
    this.push('#Fields: provider http-method status-code uri-path time-taken response-size cache-status\n')
  }
  this.init = false

  const line = chunk.toString()
  let pattern = /(\d+)\|(\d+)\|(\w+)\|"(\w+)\s(\/[\w|.|-]+)\s([\w|.|/]+)"\|(\d+)/
  let groups = pattern.exec(line)
  const obj = {
    provider: 'MINHA CDN',
    'response-size': groups[1],
    'status-code': groups[2],
    'cache-status': groups[3],
    'http-method': groups[4],
    'uri-path': groups[5],
    'time-taken': groups[7]
  }
  cb(null, `"${obj.provider}" ${obj['http-method']} ${obj['status-code']} ${obj['uri-path']} ${obj['time-taken']} ${obj['response-size']} ${obj['cache-status']}\n`)
}

module.exports = Convert
