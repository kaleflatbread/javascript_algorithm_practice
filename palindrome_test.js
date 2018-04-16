function palindrome(str){
  var reverse = "";
  var i = str.length - 1;
  while (i >= 0){
    reverse += str[i];
    i--;
  }
  if(reverse === str){
      return true;
  }
  else{
      return false;
  }
}
