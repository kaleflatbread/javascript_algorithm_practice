/*
Write a function that takes three arguments: n (number), m(number) and direction
(string). The function should count to n by intervals of m and return those
numbers in an array.

If the direction string is "Up", the function should count up to n from but not
including 0. If the string is "Down", it should count down to but not including
0. You can assume that both n and m will be greater than 0.

*/

function count(m, n, direction){
var newArray = [];
  if(direction === "Down"){
    for(var down = m; down >= 0; down -= n){
  	if(down !== 0) newArray.push(down);
    }
  }
  else{
    for(var up = 0; up <= m; up += n) {
    if(up !== 0) newArray.push(up);
    }
  }
  return newArray;
}


//EXAMPLE TESTS

console.log(count(10, 2, "Up"));
// OUTPUT: [2, 4, 6, 8, 10]

console.log(count(11, 2, "Down"));
// OUTPUT: [11, 9, 7, 5, 3, 1]
