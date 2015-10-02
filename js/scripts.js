var romanNumerals = function(userInput) {
  var i = "";
  if(userInput % 5 != 0) {
    for(var j = 1; j < 10; j++) {
      if(userInput === j) {
        i += "I";
        return i;
      } else {
        i += "I";
      }
    }
  } else if(userInput % 5 === 0) {

      for(var j = 5; j < 100; j+= 5) {
        if(userInput === j) {
          i += "V";
          return i;
        } else {
          i += "V";
        
      }
    };
  };
};
