function countValidNumsInString(str) {
  //convert string to arr
  //parse int each element
  //if element is a number increment count
  //return count
  return str.split("").reduce((acc, curr) => {
    console.log(parseInt(curr))
    if(!isNaN(parseInt(curr))) acc++
    return acc
  }, 0)
}

console.log(countValidNumsInString("512,3,4!?!")) // 5