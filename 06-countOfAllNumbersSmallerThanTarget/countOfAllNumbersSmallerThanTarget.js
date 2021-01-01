function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  var tally =  0;
  for (var i = 0; i < nums.length; i++){
    if (num[i] < target){
      tally+= 1;
    }
  }
  return tally;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
