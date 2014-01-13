var expect = require('chai').expect;

describe('in-js', function(){
  it('works with identifiers', function(){
    var x = "two", y = "eight", list = ["one", "two", "three"];

    expect(x in? list).to.be.true;
    expect(y in? list).to.be.false;
  });

  it('works with expressions', function() {
    var makeList = function(){
      return Array.prototype.slice.call(arguments);
    }

    expect((1 + 2) in? makeList(1, 2, 3)).to.be.true;
    expect((2 * 8) in? makeList(1, 2, 3)).to.be.false;
  });

  it('works with literals', function(){
    expect(2 in? [1, 2, 3]).to.be.true;
    expect(10 in? [1, 2, 3]).to.be.false;
  });
});
