// Monkey patch before you require http for the first time.
process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser

const request = require('request')
const http = require('https')

function Req (options) {
  if (!(this instanceof Req)) return new Req(options)
  return this
}

Req.prototype.get = function (url) {
  var options = {
    method: 'GET',
    url: url,
    forever: true,
    headers:
    {
      'User-Agent': 'request',
      'content-type': 'text/plain'
    },
    agent: new http.Agent({ keepAlive: true })
  }
  return request(options)
}

module.exports = Req
