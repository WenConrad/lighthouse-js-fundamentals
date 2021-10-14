for (let i = 100; i <= 200; i++) {
  let num = ""
  num += (!(i % 3)) ? "Loopy" : ""
  num += (!(i % 4)) ? "Lighthouse" : ""
  num = (num === "") ? i : num
  console.log(num);
}