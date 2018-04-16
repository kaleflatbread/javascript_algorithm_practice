function prime(num){
  for(divisor=2;divisor<num/2;divisor++){
    if(num % divisor === 0){
      return false;
    }
  }
  return true;
}
