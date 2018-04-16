function underToCamel(str){
  var answer = "";
  for(i=0;i<str.length;i++){
    if(str[i] === "_"){
      answer += str[i+1].toUpperCase()
      i += 1;
    }
    else{
      answer += str[i];
    }
  }
  return answer;
}

underToCamel("kale_flatbread");
