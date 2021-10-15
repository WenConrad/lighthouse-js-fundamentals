const judgeVegetable = function (vegetables, metric) {
  let winner = ""
  let score = 0
  for (let entry of vegetables) {
    if (entry[metric] > score) {
      score = entry[metric];
      winner = entry.submitter;
    } else if (entry[metric] === score) {
      winner += ` and ${entry.submitter}`;
    }
  }
  return winner
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));