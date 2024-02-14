function separateLanguages(arr) {
  return arr.reduce(
    (obj, curr) => {
      if (curr === "python" || curr === "javascript")
        obj[curr] = ++obj[curr];
      else obj.other.push(curr);
      return obj;
    },
    {
      javascript: 0,
      python: 0,
      other: [],
    }
  );
}
