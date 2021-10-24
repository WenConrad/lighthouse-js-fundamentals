function merge(array1, array2) {
  let merged = []
  let i1 = 0
  let i2 = 0
  while(i1 + i2 < array1.length + array2.length) {
    if (array1[i1] <= array2[i2] || array2[i2] === undefined) {
      merged.push(array1[i1]);
      i1++
    } else {
      merged.push(array2[i2]);
      i2++
    }
  }
  return merged
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);