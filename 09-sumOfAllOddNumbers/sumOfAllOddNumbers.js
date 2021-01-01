function sumOfAllOddNumbers(nums) {
  // Insert code here;
  var count = 0;
  for (var i = 0; i < nums.length; i++){
  // If the number in the array is odd, increase the count
    if ((nums[i] % 2) != 0){
     count+= 1;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
