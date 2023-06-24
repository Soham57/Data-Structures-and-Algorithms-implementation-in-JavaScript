function binarySearch(arr, element) {
  if (arr.length === 0) {
    return false;
  }

  if (arr.length === 1) {
    return arr[0] === element;
  }

  let midIndex = Math.floor(arr.length / 2);

  if (arr[midIndex] === element) {
    return true;
  }

  let left = arr.slice(0, midIndex);
  let right = arr.slice(midIndex);

  return binarySearch(left, element) || binarySearch(right, element);
}

console.log(binarySearch([0, 5, 10, 12, 15, 19, 21, 22, 24, 30], 10));
