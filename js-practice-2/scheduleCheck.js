function scheduleCheck(obj1, obj2) {
  //if the value for a key on obj1 is true
  //check if value on other obj matches
  //if so increment count
  let count = 0
  for(const key in obj1) {
    if(obj1[key] && obj2[key]) count ++
  }
  return count
}

