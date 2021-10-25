let loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let num = "";
    for (let j = 0; j < multiples.length; j++)
      num += (!(i % multiples[j])) ? words[j] : "";
    num = (num) ? num : i;
    console.log(num);
  }
};