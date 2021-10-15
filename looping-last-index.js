function lastIndexOf (array, value) {
  let indexLast = ""
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indexLast = i;
    }
  }
  if (indexLast === "") {
    indexLast = -1
  }
  return indexLast
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);