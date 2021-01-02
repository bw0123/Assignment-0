class MySolution {
  countDownSum(num) {
    // Insert code here;
    var sum = 0;
    // Add numbers from descending order, set i = num instead of 0
    for (var i = num; i >= 0; i--){
     sum+= i; 
    }
    document.write(sum);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
