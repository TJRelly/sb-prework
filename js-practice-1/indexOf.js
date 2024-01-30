// add whatever parameters you deem necessary - good luck!
function indexOf(arr, n){
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n) return i
    }
    return -1
}