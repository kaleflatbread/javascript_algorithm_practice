function exponentiate(num1, num2){
	var answer = 1;
  for(num2;num2>0;num2--){
		answer *= num1;
  }
  return answer;
}
