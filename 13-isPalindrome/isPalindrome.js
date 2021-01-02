function isPalindrome(word) {
  // Insert code here;
  var reverse = ' ';
  
  for(var j = word.length - 1; i >= 0; i--){
    reverse+= word[i];
  }
  if(word === reverse){
    document.write(Boolean(true));
  }
  else if(word != reverse){
    document.write(Boolean(false));
  }
}

// Do not edit this line;
module.exports = isPalindrome;
