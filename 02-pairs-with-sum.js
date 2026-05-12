const findPairs = (arr, targetedSum) => {
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetedSum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
};

console.log(findPairs([1, 2, 3, 4, 6, 7, 8, 9, 10], 12));
