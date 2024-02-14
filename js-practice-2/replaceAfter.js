function replaceAfter(array, index) {
  // const  output = []
  // //find index
  // //replace index and next index with "hello", "world"
  // for (let i = 0; i < array.length; i++) {
  //   if(i === index) {
  //     output.push("Hello")
  //     output[i + 1] = "world"
  //     i++
  //   }
  //   else output.push(array[i])
  // }
  // return output;
  array.splice(index, 2, "Hello", "world")
  return array
}

console.log(replaceAfter(["1", "2", "a", "b", "3", "4"], 2));
// ["1", "2", "Hello", "world", "3", "4"]
