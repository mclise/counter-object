var chai = require('chai');
var expect = chai.expect;
var counter = require('../../counterobj');

describe('counterObj tests', function(){
  var helloCount = counter(function(){console.log('hello world');});


  describe('counterObj', function(){
    it('starts count at zero', function(){
      expect(helloCount.getValue()).to.eql(0);
    });

    it('increments count by one when function is called', function(){
      helloCount();
      expect(helloCount.getValue()).to.eql(1);
    });
  });  
});

