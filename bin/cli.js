#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander')
var stack = require('../')
program
  .version('0.1.0')
  .option('-u, --url [type]', 'Url from log')
  .option('-f, --file [type]', 'file name')
  .parse(process.argv)

console.log('grab and transform the log:')
if (program.url) console.log('  - url: ', program.url)
if (program.file) console.log('  - file: ', program.file)

if (!program.url || !program.file) {
  program.help()
}

stack.flow(program.url, program.file)
