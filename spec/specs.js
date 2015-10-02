// describe("romanNumerals", function() {
//   it("converts the number one into a roman numeral", function() {
//     expect(romanNumerals(1)).to.equal("I");
//   });
//
//   it("adds additional I's for numbers under 5", function() {
//     expect(romanNumerals(2)).to.equal("II");
//   });
//
//   it("for 5 it returns V", function() {
//     expect(romanNumerals(5)).to.equal("V");
//   });
// });

describe("romanNumerals", function() {
  it("returns an array with one unit", function() {
    expect(romanNumerals(100)).to.eql([1,0,0,0,0]);
  });
  it("returns an array with two units", function() {
    expect(romanNumerals(150)).to.eql([1,1,0,0,0]);
  });
});
