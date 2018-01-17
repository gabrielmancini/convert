const fs = require('fs')
const assert = require('assert')
const convert = require('../')
var LineStream = require('readline-stream')
describe('cdn suite', function () {
  var minhaCdn
  var agora
  var lMinhaCdn = '312|200|HIT|"GET /robots.txt HTTP/1.1"|100.2'
  var lAgora = '"MINHA CDN" GET 200 /robots.txt 100 312 HIT'
  before(function () {
    minhaCdn = fs.createReadStream('./test/fixtures/minhacdn.txt')
    agora = fs.readFileSync('./test/fixtures/agora.txt').toString()
  })
  it('shold be able convert content', function (done) {
    var bytes = ''
    minhaCdn
      .pipe(LineStream({}))
      .pipe(convert.convert())
      .on('data', function (chunk) {
        bytes += chunk
      })
    .on('finish', function () {
      console.log('err', arguments)
      assert.equal(bytes, agora)
      done()
    })
  })
  it('shold be able to get the url content', function () {

  })
  it('shold be able to save a file', function () {

  })
})
