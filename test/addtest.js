var assert = require('chai').assert;

var add = require('../addition');

describe('This will test methods of add file', ()=>
{
it('This should return 5' , ()=>
{

  assert.equal(add(2,3),5);
});

it('This should be more than 5' , () =>
{
  assert.isAbove(add(10,20) , 5);
});

it('Result should be integer' , () =>
{
  assert.typeOf(add(1,2), 'number');
});
});