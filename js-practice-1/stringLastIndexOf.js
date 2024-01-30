// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(word, char){
    for(let i = word.length - 1; i > 0; i--) {
        if(word[i] === char) return i
    }
    return -1
}