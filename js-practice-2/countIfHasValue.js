function countIfHasValue(obj, val) {
  let count = 0;
  //iterate obj
  for (const key in obj) {
    //iterate arr
    if(obj[key].includes(val)) count++
  }
  //return count
  return count;
}

let obj = {
  a: [1, 10, 3],
  b: [4, 1, 7],
  c: [7, 7, 7],
  d: [10, 7, 12]
};
console.log(countIfHasValue(obj, 20)) // 2
