var assert = require('chai').assert;
var hello = require("../hello");

describe('This will test methods of hello' , function()
{

  it('It should return hello message' , function()
  {
     assert.equal(hello(),'hello');
  });

});


