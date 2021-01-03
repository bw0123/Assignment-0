function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let obj = new Set();
  
  for (var i = 0; i < args.length, i++){
    for(let numbers of args[i]){
     finalSet.add(numbers); 
    }
  }
  return obj;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
