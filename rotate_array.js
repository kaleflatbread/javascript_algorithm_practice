//rotate values in arr to the right by # of steps. return the rotated array.
//rotate([1,2,3,4,5],2) should return [4,5,1,2,3]

function rotate(arr,steps){
  var rotations = steps;
  var idx;
  while(rotations>0){
    idx = arr.pop();
    arr.unshift(idx);
    rotations--;
  }
  return arr;
}
