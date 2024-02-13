// add whatever parameters you deem necessary - good luck!
function separate(arr) {
  //   const output = [];
  //   for (const el of arr) {
  //     if (el === "cat") {
  //       output.push(el);
  //     }
  //   }
  //   for (const el of arr) {
  //     if (el === "water") {
  //       output.push(el);
  //     }
  //   }
  //   for (const el of arr) {
  //     if (el === "dog") {
  //       output.push(el);
  //     }
  //   }
  //   return output
  return []
    .concat(arr.filter((word) => word === "cat"))
    .concat(arr.filter((word) => word === "water"))
    .concat(arr.filter((word) => word === "dog"));
}
