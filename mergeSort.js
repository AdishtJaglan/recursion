function mergeSort(arr, left, right) {
  if (left === right) {
    return;
  }

  let mid = Math.floor((left + right) / 2);

  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  let n1 = mid - left + 1;
  let n2 = right - mid;
  let leftArray = new Array(n1);
  let rightArray = new Array(n2);

  for (let i = 0; i < n1; i++) {
    leftArray[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    rightArray[j] = arr[mid + 1 + j];
  }

  let i = 0,
    j = 0,
    k = left;

  while (i < n1 && j < n2) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = rightArray[j];
    j++;
    k++;
  }
}

let arr = [12, 11, 13, 5, 6, 7];

mergeSort(arr, 0, arr.length - 1);

console.log("Sorted array is:", arr);
