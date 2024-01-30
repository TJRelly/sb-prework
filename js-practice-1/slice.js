// add whatever parameters you deem necessary - good luck!
function slice(arr, start, end){
    const output = []
    if(end === undefined || end > arr.length) end = arr.length
    console.log(start, end)
    for(let i = start; i < end; i++) {
        output.push(arr[i])
    }
    return output
}
console.log(slice([1, 2, 3, 4, 5], 0, 2)); // [1, 2]
console.log(slice([1, 2, 3, 4, 5], 2, 4)); // [3, 4]
console.log(slice([1, 2, 3, 4, 5], 2)); // [3, 4, 5]
console.log(slice([1, 2, 3, 4, 5], 2, 10)); // [3, 4, 5]