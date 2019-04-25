'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('simple validate test', () => {
  it('should return false for empty string', () => {
    var result = index.datetime("");
    expect(result).to.equal('1970-01-01T05:30:00+05:30');
  });
  it('should return string for non-empty string', () => {
    var result = index.datetime("1555923762",'MMMM Do, YYYY h:mm ss A');
    expect(result).to.equal("April 22nd, 2019 2:32 42 PM");
  });
});