/*
Create a function that takes a number as an argument and returns an array.
The first element of the array should be 0, and then each element should
increase by 1 until it reaches the input number. Then, each element should
count back down to 0.
*/

function countUpThenDown(num){
	var output = [];
  for(var idx = 0;idx<=num;idx+=1){
		output.push(idx);
  }
	for(var idx = num-1;idx>=0;idx-=1){
  	output.push(idx);
  }
  return output;
}
