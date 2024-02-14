function reverseValues(arr) {
  const output = []
  for(let i=0; i<arr.length; i++) {
    if(arr[i] % 2 === 0) {
      i+=2
    } else {
      output.unshift(arr[i])
    }
  }
  return output
}

