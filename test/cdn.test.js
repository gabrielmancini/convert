const fs = require('fs')
const assert = require('assert')
const convert = require('../')
describe('cdn suite', function () {
  var minhacdn
  var agora
  var lMinhaCdn = '312|200|HIT|"GET /robots.txt HTTP/1.1"|100.2'
  var lAgora = '"MINHA CDN" GET 200 /robots.txt 100 312 HIT'
  before(function () {
    minhacdn = fs.readFileSync('./test/fixtures/minhacdn.txt').toString()
    agora = fs.readFileSync('./test/fixtures/agora.txt').toString()
  })
  it('shold be able convert content', function () {
    assert.equal(convert(lMinhaCdn), lAgora)
  })
  it('shold be able to get the url content', function () {

  })
  it('shold be able to save a file', function () {

  })
})
