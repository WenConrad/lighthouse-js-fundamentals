function range(start, end, step) {
  let count = [];
  if (start !== undefined && end !== undefined && step !== undefined && start <= end && step > 0) {
    for (let i = start; i <= end; i += step) {
      count.push(i);
    }
  }
  return count
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));