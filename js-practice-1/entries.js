// add whatever parameters you deem necessary - good luck!
function entries(obj){
    const output = []
    for(const key in obj){
        output.push([key, obj[key]])
    }
    return output
}