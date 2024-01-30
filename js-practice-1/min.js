// add whatever parameters you deem necessary - good luck!
function min(arr){
    let low = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < low) low = arr[i]
    }
    return low
}