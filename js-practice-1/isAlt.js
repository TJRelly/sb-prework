// add whatever parameters you deem necessary - good luck!
function isAlt(str) {
  //check if first el is vowel
  //check each even index is vowel and odd index is NOT a vowel
  //otherwise do checks in reverse
  const vowels = "aeiou";
  if (vowels.includes(str[0])) {
    for (let i = 1; i < str.length; i++) {
      if (i % 2 && vowels.includes(str[i])) return false;
      if (i % 2 === 0 && !vowels.includes(str[i])) return false;
    }
    return true;
  } else {
    for (let i = 1; i < str.length; i++) {
      if (i % 2 && !vowels.includes(str[i])) return false;
      if (i % 2 === 0 && vowels.includes(str[i])) return false;
    }
    return true;
  }
}
