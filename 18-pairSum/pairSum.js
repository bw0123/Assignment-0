function pairSum(nums, target) {
  // Insert code here;
  var sum = 0;
  let nums = [];
  
  if (nums.length <= 1){
    throw "Array length needs to be larger than 1";
  } 
  
  for (var i = 0; i < nums.length; i++){
    for (var j = i+1; j < nums.length; j++){
     if (target === nums[i]){
      return true; 
     }
     else if ((nums[i] + nums[j]) === target && i != j){
        return true;
     }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
