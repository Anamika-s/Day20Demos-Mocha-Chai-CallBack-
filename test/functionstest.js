var assert = require('chai').assert;

var addition = require('../functions').addition;
var subtraction = require('../functions').subtraction;

describe('This is for functions file' , ()=>
{
  describe('Testing methods of addition', ()=>
  {
  it('this shoud give us 10', ()=>
  {
assert.equal(addition(4,6) , 10);
  });
  });
  describe('Testing methods of subtrction', ()=>
  {
  
  it('this shoud give us 10', ()=>
  {
assert.equal(subtraction(20,10) , 10);
  });
});

})