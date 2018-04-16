function reverseString(str){
  var reverse = "";
  var i = str.length - 1;
  while (i >= 0){
    reverse += str[i];
    i--;
  }
  return reverse;
}
