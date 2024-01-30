// add whatever parameters you deem necessary - good luck!
function removeFromString(str, index, numofchars){
    const arr = str.split("")
    arr.splice(index, numofchars)
    return arr.join("")
}

console.log(removeFromString("Terrell", 3, 2))