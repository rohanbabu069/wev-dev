function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0]; // pick first element
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example
console.log(quickSort([23,34,1,2,21,65,4,5,34,8,79]));