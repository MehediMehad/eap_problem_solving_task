const findMissingElements = (arr) => {
  if (arr.length === 0) return [];

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const numSet = new Set(arr);
  const missing = [];

  for (let i = min; i <= max; i++) {
    if (!numSet.has(i)) {
      missing.push(i);
    }
  }

  return missing;
};

console.log(findMissingElements([1, 2, 4, 6])); // [3, 5]

console.log(findMissingElements([10, 7, 12, 9])); // [8, 11]

console.log(findMissingElements([1, 2, 3, 4])); // []
