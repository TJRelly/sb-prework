function findFirstAndLastIndex(arr, val) {
  //iterate arr fowards and backward for val
  //if index is the same or not there return -1
  //otherwise return array of indexes
  const output = [];
  //forward
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      output.push(i);
      break;
    }
  }
  //backwards
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === val && !output.includes(i)) {
      output.push(i);
      break;
    }
  }

  return output.length > 1 ? output : -1;
}

console.log(findFirstAndLastIndex([1, 2, 2, 2, 5], 2));
