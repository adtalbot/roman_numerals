describe("romanNumerals", function() {
  it("converts the number one into a roman numeral", function() {
    expect(romanNumerals(1)).to.equal("I");
  });

  it("adds additional I's for numbers under 5", function() {
    expect(romanNumerals(2)).to.equal("II");
  });

  it("for 5 it returns V", function() {
    expect(romanNumerals(5)).to.equal("V");
  });
});
