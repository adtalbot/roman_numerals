describe("romanNumerals", function() {
  it("returns an array with one unit", function() {
    expect(romanNumerals(100)).to.eql([1,0,0,0,0]);
  });
  it("returns an array with two units", function() {
    expect(romanNumerals(150)).to.eql([1,1,0,0,0]);
  });
  it("returns an array with three units", function() {
    expect(romanNumerals(160)).to.eql([1,1,1,0,0]);
  });
  it("returns an array with four units", function() {
    expect(romanNumerals(165)).to.eql([1,1,1,1,0]);
  });
  it("returns an array with five units", function() {
    expect(romanNumerals(166)).to.eql([1,1,1,1,1]);
  });
  it("returns an empty array", function() {
    expect(romanNumerals(0)).to.eql([0,0,0,0,0]);
  });
});

describe("rNum", function() {
  it("takes an array of one unit and returns the roman numeral", function() {
    expect(rNum([1,0,0,0,0])).to.equal("C");
  });
  it("takes an array of two units and returns the roman numerals" , function() {
    expect(rNum([1,1,0,0,0])).to.equal("CL");
  });
  it("takes an array of three units and returns the roman numerals", function() {
    expect(rNum([1,1,1,0,0])).to.equal("CLX");
  });
  it("takes an array of four units and returns the roman numerals", function() {
    expect(rNum([1,1,1,1,0])).to.equal("CLXV");
  });
  it("takes an array of five units and returns the roman numerals", function() {
    expect(rNum([1,1,1,1,1])).to.equal("CLXVI");
  });
});
