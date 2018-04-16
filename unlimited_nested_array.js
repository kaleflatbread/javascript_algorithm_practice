var sum = 0;
function sumNestedArray(arr){
  for(var idx=0;idx<arr.length;idx++){
    if (typeof arr[idx] === 'object'){
      sumNestedArray(arr[idx]);
    }
    else{
      sum += arr[idx]
    }
  }
return sum;
}

console.log(sumNestedArray([1,[3,2,[4,20],5]]))
//console.log("should return 35")

//sumNestedArray([[1,1,[1,1],[1]]])
//console.log("should return 5")

// sumNestedArray([[[[[[1],5]]]]])
// console.log("should return 6")
