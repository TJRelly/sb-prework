// add whatever parameters you deem necessary - good luck!
// output: array with val of key or undefined 
function pluck(arrOfObj, key){
    const output = []
    for(const obj of arrOfObj) {
        output.push(obj[key] ?? undefined)
    }
    return output
}

console.log(pluck([
    { name: "Tim" }, { name: "Matt" }, { name: "Elie" }],
   'name'
  ))
  // ["Tim", "Matt", "Elie"]
  
  console.log(pluck(
    [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],
   'isBoatOwner'
  ))
  // [true, false, undefined]