const fs = require('fs')
const assert = require('assert')
const stack = require('../')
var LineStream = require('readline-stream')
describe('cdn suite', function () {
  var minhaCdn
  var minhaCdnSync
  var agora
  var url = 'https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt'
  var lMinhaCdn = '312|200|HIT|"GET /robots.txt HTTP/1.1"|100.2'
  var lAgora = '"MINHA CDN" GET 200 /robots.txt 100 312 HIT'
  before(function () {
    minhaCdn = fs.createReadStream('./test/fixtures/minhacdn.txt')
    minhaCdnSync = fs.readFileSync('./test/fixtures/minhacdn.txt', {encoding: 'UTF-8'}).toString()
    agora = fs.readFileSync('./test/fixtures/agora.txt').toString()
  })
  it('shold be able convert content', function (done) {
    var bytes = ''
    minhaCdn
      .pipe(LineStream({}))
      .pipe(stack.convert())
      .on('error', done)
      .on('data', function (chunk) {
        bytes += chunk
      })
      .on('finish', function () {
        assert.equal(bytes, agora)
        done()
      })
  })
  it('shold be able to get the url content', function (done) {
    var raw = ''
    stack.req()
      .get(url)
      .on('error', done)
      .on('response', function (res) {
        res
          .on('data', function (data) {
            raw += data
          })
          .on('end', function () {
            assert.equal(raw, minhaCdnSync)
            done()
          })
      })
  })
  it('shold be able to save a file', function () {

  })
})
