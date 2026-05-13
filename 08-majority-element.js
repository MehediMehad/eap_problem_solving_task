function majorityElement(numbers) {
  let candidate = null;
  let count = 0;

  // Step 1: find candidate
  for (const num of numbers) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  // Step 2: verify candidate
  let freq = 0;
  for (const num of numbers) {
    if (num === candidate) freq++;
  }

  return freq > Math.floor(numbers.length / 2) ? candidate : null;
}

console.log(majorityElement([3, 2, 3, 2, 2])); // 2
console.log(majorityElement([2, 2, 1, 1, 2, 2])); // 2
console.log(majorityElement([1, 2, 3, 4, 5])); // null
