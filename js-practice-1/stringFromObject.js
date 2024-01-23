// add whatever parameters you deem necessary - good luck!
function stringFromObject(object){
    //convert object to array
    //join with = then with ,
    return Object.entries(object).map(pair => pair.join(" = ")).join(", ")
}

console.log(stringFromObject({ a: 1, b: '2' }));
// "a = 1, b = 2"