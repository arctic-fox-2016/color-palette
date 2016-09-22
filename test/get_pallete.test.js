let mocha = require('mocha')
let assert= require('assert')
let getPallete = require('../lib/get_pallete')

describe('#indexOf()', function() {
  it('should return -1 when the value is not present', function() {
    assert.equal(3, getPallete().length);
  });
});
