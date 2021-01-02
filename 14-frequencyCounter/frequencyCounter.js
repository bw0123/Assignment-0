function frequencyCounter(word) {
  // Insert code here;
  var frequency = 1;
  var count = 1;
  
  for(var i = 0; i < word.length; i++){
  // Increase count if letters match
    if((word.charAt(i)) == word.charAt(i + 1)){
      frequency+= 1;
      document.write(" ", word.charAt(i), " : ", frequency, " ");
    }
    else{
      count == 1;
      document.write(" ", word.charAt(i), " : ", count, " ");
    }
  }
}

// Do not edit this line;
module.exports = frequencyCounter;
