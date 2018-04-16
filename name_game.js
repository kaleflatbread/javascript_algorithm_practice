function playNameGame(name){
	var vowels = "AEIOU";
  for (var idx = 0;idx < 5;idx++){
  	if (name[0] === vowels[idx]){
  		return name + " " + name + " Bo B" + name.toLowerCase() + " Banana Fana Fo F" + name.toLowerCase() + " Fee Fi Mo M" + name.toLowerCase() + " " + name;
    }
  	else{
      return name + " " + name + " Bo B" + name.slice(1) + " Banana Fana Fo F" + name.slice(1) + " Fee Fi Mo M" + name.slice(1) + " " + name;
    }
  }
}
