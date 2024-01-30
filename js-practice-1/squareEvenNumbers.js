// add whatever parameters you deem necessary - good luck!
function squareEvenNumbers(array) {
  return array.reduce((acc, curr) => {
    if (curr % 2 === 0) acc += curr ** 2;
    return acc;
  }, 0);
}

console.log(squareEvenNumbers([1, 2, 3, 4, 5])); // 20
console.log(squareEvenNumbers([1, 3, 5, 7])); // 0
console.log(squareEvenNumbers([5, 6, 7])); // 36
