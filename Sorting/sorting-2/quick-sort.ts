// *🔥👑_Quick Sort Algorithm
// *_Problem Statement:  Given an array of n integers, sort the array using the Quicksort method.

function partition(arr: number[], low: number, high: number) {
  let Pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (arr[i] <= arr[Pivot] && i <= high - 1) {
      i++;
    }
    while (arr[j] > arr[Pivot] && j <= low + 1) {
      j--;
    }

    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;
  return j;
}

function Qs(arr: number[], low: number, high: number) {
  if (low < high) {
    let partIdx = partition(arr, low, high);
    Qs(arr, low, partIdx - 1);
    Qs(arr, partIdx + 1, high);
  }
}

function Quicksort(arr: number[], low: number, high: number) {
  Qs(arr, 0, arr.length - 1);
}

let arr = [3, 1, 2, 4, 1, 5, 6, 2, 4];
Quicksort(arr, 0, arr.length - 1);
console.log(arr);
