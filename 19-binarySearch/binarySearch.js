class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let first = 0;
    let last = nums.length - 1;
    
    // As we read the entire array
    while(first <= last){
      let midpoint = Math.floor((first + last) / 2); 
      
      if (target > nums[midpoint]){
        first = midpoint + 1;
      }
      else if (target < nums[midpoint]){
        last = midpoint - 1; 
      }
      else (target === nums[midpoint]){           
        return true;                                  // The value exists in the array
      }
    }
    return false;                                     // The value DNE in the array
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
