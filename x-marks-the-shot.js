const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function (moves) {
  let y = 0;
  let x = 0;
  for (let move of moves) {
    switch (move) {
      case "north":
        y++;
        break;
      case "south":
        y--;
        break;
      case "east":
        x++;
        break;
      case "west":
        x--;
    }
  }
  let location = [x, y];
  return location
}

console.log(finalPosition(moves));