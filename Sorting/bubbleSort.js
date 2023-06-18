function bubbleSort(arr) {
  let swapCount = 1;

  while (swapCount > 0) {
    swapCount = 0;

    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        // Swapping elements
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        swapCount++;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([1, 5, 4, 2, 3]));
