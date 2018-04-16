function sumOfDigits(num){
  var stringNum = num.toString();
  var sum = 0;
  var i = 0;
  while(i < stringNum.length){
    sum += +stringNum[i];
    i++;
  }
  return sum;
}
