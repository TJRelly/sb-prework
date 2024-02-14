function inMatrix(arrOfArr, val) {
  //iterate arrofArr and each arr
  //if val present return true otherwise false
  for (arr of arrOfArr) {
    for (el of arr) {
      if (el === val) return true;
    }
  }
  return false;
}
