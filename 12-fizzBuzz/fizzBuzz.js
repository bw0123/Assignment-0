function fizzBuzz(start, end) {
  // Insert code here;
  var arr = [];
  
  for(var i = 0; i <= end; i++){
  // For numbers which are multiples of both three and five, insert "FizzBuzz" into the output array
    if ((i % 3 == 0) && i % 5 == 0){
      arr.push("FizzBuzz");
    }
  // For multiples of three, insert "Fizz" instead of the number into the output array
    else if(i % 3 == 0){
      arr.push("Fizz");
    }
  // For multiples of five, insert "Buzz" instead of the number into the output array
    else if(i % 5 == 0){
      arr.push("Buzz"); 
    }
    else{
      arr.push(i); 
    }
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;
