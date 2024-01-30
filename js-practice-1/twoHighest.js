// add whatever parameters you deem necessary - good luck!
function twoHighest(nums) {
  let highest = -Infinity;
  let secondHighest = -Infinity;
  for (const num of nums) {
    if (num > highest) {
      temp = highest;
      highest = num;
      secondHighest = temp;
    } else if (num > secondHighest) secondHighest = num;
  }
  return [secondHighest, highest];
}

console.log(twoHighest([1, 2, 10, 8])); // [8, 10]
