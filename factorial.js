function factorial(num){
  var answer = 1;
  for(num; num > 1; num--){
    answer *= num;
  }
  return answer;
}
