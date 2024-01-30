// add whatever parameters you deem necessary - good luck!
function countValues(arr, num){
    let count = 0
    for(const val of arr) {
        if(val === num) count++
    }
    return count
}