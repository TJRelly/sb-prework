// add whatever parameters you deem necessary - good luck!
function includes(collection, value, index = 0) {
  //for Objects
  if (typeof collection === "object" && !Array.isArray(collection)) {
    for (const val in collection) {
      if (collection[val] === value) return true;
    }
    return false;
  }
  //for Strings and Arrays
  for (let i = index; i < collection.length; i++) {
    if (collection[i] === value) return true;
  }
  return false;
}

console.log(includes([1, 2, 3], 1)); // true
console.log(includes([1, 2, 3], 1, 2)); // false
console.log(includes([1, 2, 3], 6)); // false

console.log(includes({ a: 1, b: 2 }, 1)); // true
console.log(includes({ a: 1, b: 2 }, "a")); // false

console.log(includes("abcd", "b")); // true
console.log(includes("abcd", "e")); // false
console.log(includes("abcd", "a", 2)); // false
