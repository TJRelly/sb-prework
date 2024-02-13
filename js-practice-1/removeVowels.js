// add whatever parameters you deem necessary - good luck!
function removeVowels(str) {
  const vowels = "aeiou";
  let output = "";
  for (const letter of str) {
    if (!vowels.includes(letter.toLowerCase())) output += letter;
  }
  return output;
}
