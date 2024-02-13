// add whatever parameters you deem necessary - good luck!
function totalCaps(arr){
    //iterate the array
    //iterate each string
    //count caps
    let count = 0
    for(const str of arr) {
        for(const letter of str) {
            if(letter === letter.toUpperCase()) count++
        }
    }
    return count
}