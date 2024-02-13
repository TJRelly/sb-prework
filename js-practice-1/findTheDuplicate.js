// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(arr) {
  
    const map = arr.reduce((obj, curr) => {
    obj[curr] = ++obj[curr] || 1;
    return obj;
  }, {});

  for (const key in map) {
    if (map[key] > 1) return +key;
  }
  return undefined;
}

console.log(findTheDuplicate([1, 2, 4, 4, 3, 12])); // 1
