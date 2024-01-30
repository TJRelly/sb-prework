// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(obj){
    let hi = -Infinity
    let lo = Infinity
    for(const key in obj) {
        if(key > hi) hi = +key
        if(key < lo) lo = +key
    }
    return [lo, hi]
}