// var romanNumerals = function(userInput) {
//   var i = "";
//   if(!multOf5) {
//
//     for(var j = 1; j < 10; j++) {
//       if(userInput === j) {
//         i += "I";
//         return i;
//       } else {
//         i += "I";
//       }
//     }
//   } else if(multOf5) {
//
//       for(var j = 5; j < 100; j+= 5) {
//         if(userInput === j) {
//           i += "V";
//           return i;
//         } else {
//           i += "V";
//         }
//       }
//   }
// };
//
// var multOf5 = function(userInput) {
//   if(userInput % 5 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

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





$(document).ready(function() {
  $("form#romanNumerals").submit(function(event) {
    var userInput = parseInt($("input#number").val());
    var result = romanNumerals(userInput);

    $(".result").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
