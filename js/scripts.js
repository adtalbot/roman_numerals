var romanNumerals = function(userInput) {
  var index;
  var units = 0;
  var unitsArr = [];
  var remainder = 0;
  var symNum = [100,50,10,5,1];

  for(index = 0; index < symNum.length; index++) {
    units = parseInt(userInput / symNum[index]);
    remainder = userInput % symNum[index];
    unitsArr.push(units);
    userInput = remainder;
  }
    return unitsArr;
  };

    var result = romanNumerals();
    var rNum = function(result) {
    var i;
    var index;
    var arr = ["C","L","X","V","I"];
    var units= 0;
    var totalNum = "";

    for(index = 0; index < 5; index++) {
      units = result[index];
      for(i = 0; i < units; i++) {
        totalNum += arr[index];
      }
    }
    return totalNum;
  };


$(document).ready(function() {
  $("form#romanNumerals").submit(function(event) {
    var userInput = parseInt($("input#number").val());
    var result = romanNumerals(userInput);
    var finalResult = rNum(result);

    $(".result").text(finalResult);
    $("#result").show();
    event.preventDefault();
  });
});
