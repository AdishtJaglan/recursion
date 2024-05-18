# Algorithm Implementations: Merge Sort and Fibonacci Series

This repository contains implementations of the Merge Sort algorithm and the Fibonacci series in both iterative and recursive forms. These implementations are written in JavaScript and demonstrate basic algorithmic principles.

## Table of Contents

- [Merge Sort](#merge-sort)
- [Fibonacci Series](#fibonacci-series)
  - [Recursive Approach](#recursive-approach)
  - [Iterative Approach](#iterative-approach)
- [Usage](#usage)
- [License](#license)

## Merge Sort

Merge Sort is a divide-and-conquer algorithm that divides the array into two halves, recursively sorts them, and then merges the sorted halves to produce the sorted array.

### Implementation

```javascript
function mergeSort(arr, left, right) {
  if (left >= right) {
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

  let i = 0, j = 0, k = left;
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
