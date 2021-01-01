function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  var count = 0;
  if (var i = 0; i < nums.length; i++){
    // If the number in the array is even, increase the count
    if (nums[i] % 2 == 0){
      count+= 1;  
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
