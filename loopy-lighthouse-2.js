function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let num = "";
    num += (!(i % multiples[0])) ? words[0] : "";
    num += (!(i % multiples[1])) ? words[1] : "";
    num = (num === "") ? i : num;
    console.log(num);
  }
}