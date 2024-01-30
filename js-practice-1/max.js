// add whatever parameters you deem necessary - good luck!
function max(arr){
    let high = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > high) high = arr[i]
    }
    return high
}