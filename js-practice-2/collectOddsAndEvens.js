function collectOddsAndEvens(arr) {
  //output: obj - even count and odd count
  return arr.reduce((obj, curr) => {
    curr % 2 === 0 ? (obj.even = ++obj.even || 1) : (obj.odd = ++obj.odd || 1);
    return obj;
  }, {});
}

console.log(collectOddsAndEvens([1, 2, 3, 4]));
