function vowelCount(str){
  str = str.toLowerCase()
  var final = "";
  for(i=0;i < str.length;i++){
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
      final += str[i];
    }
    else{
      final += "";
    }
  }
  return final.length;
}
