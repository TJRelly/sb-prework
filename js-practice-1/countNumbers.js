// add whatever parameters you deem necessary - good luck!
function countNumbers(arrOfStr) {
  //count the str that can be nums
  //iterate list to find nums and count them
  return arrOfStr.filter(num => !isNaN(parseInt(num))).length
}

