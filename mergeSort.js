function mergeSort(arr, left, right) {
  if (left === right) {
    return;
  }

  let mid = Math.floor((left + right) / 2);

  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  mergeSort(arr, low, mid, high);
}
