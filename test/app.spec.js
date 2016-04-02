var fs = require('fs');
var vm = require('vm');
var chai = require('chai');
var functionsFile = fs.readFileSync(process.cwd() + '/public/js/app.js');
vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL

var expect = chai.expect;
var should = chai.should();

describe('scoreThrows', function() {
  it('Should be a function', function() {
    expect(scoreThrows).to.be.a('function');
  });
  it('Should accept an array input of "throws"', function() {
    expect(throws).to.be.an('array');
  });
  it('Should reject non arrays"', function() {
    expect(isNaN(throws)).to.be.false;
  });
  it('Should take input array and return a single value for the score"', function() {
    expect(throwSum).to.equal(15);
  });
});