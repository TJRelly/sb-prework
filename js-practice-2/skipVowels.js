function skipVowels(str) {
  const vowels = "aeiou";
  const output = [];
  for (let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])) i++
    else output.push(str[i])
  }
  return output;
}
