function findFirstMove(arrOfArrs, firstMove) {
  //iterate array of arrays
  //iterate moves array
  //if firstMove present return array with index of array and move
  //otherwise return -1
  for(let i = 0; i < arrOfArrs.length; i++) {
    for(let j = 0; j < arrOfArrs[i].length; j++) {
      if (arrOfArrs[i][j] === firstMove) return [i, j]
    }
  }
  return -1
}

let moves = [
  ["a", "b", "c"],
  ["d", "a", "f"],
  ["g", "h", "h"],
];

console.log(findFirstMove(moves, "a")); // [0, 0]
console.log(findFirstMove(moves, "h")); // [2, 1]
console.log(findFirstMove(moves, "z")); // -1