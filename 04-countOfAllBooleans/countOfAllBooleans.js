function countOfAllBooleans(arr) {
  // Insert code here;
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if (arr[i] == true){
      count += 1;
    }
    if (arr[i] == false){
      count += 1;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
