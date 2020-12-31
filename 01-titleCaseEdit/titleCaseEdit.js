function titleCaseEdit(title) {
  // Insert code here;
  let capitalLetters = title.split(" ");
  
  for (let i = 0; i < capitalLetters.length; i++){
    capitalLetters[i] = capitalLetters[i].charAt(0).toUpperCase + capitalLetters[i].substr(1);
  }
  
  return capitalLetters.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;
