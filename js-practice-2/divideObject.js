function divideObject(obj) {
  let sumOfNums = 0;
  let sumOfChars = 0;
  //iterate obj
  for (val of Object.values(obj)) {
    //if value is number sum the nums
    if (typeof val === "number") sumOfNums += val;
    //if value is string sum the char
    else if (typeof val === "string") {
      for (char of val) sumOfChars++;
    }
  }
  //return arr of arr w/ sum of char an sum of nums
  return [[sumOfNums], [sumOfChars]];
}

console.log(
  divideObject({
    first: "hi",
    second: "hello",
    third: "hey",
    fourth: 2,
    fifth: "fun",
    sixth: 10,
  })
);
// [ [12], [13] ]
