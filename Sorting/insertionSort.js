function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numToBeInserted = arr[i];
    let j;
    for (j = i - 1; arr[j] > numToBeInserted && j > -1; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = numToBeInserted;
  }
  return arr;
}

insertionSort([1, 5, 2, 4, 3]);
