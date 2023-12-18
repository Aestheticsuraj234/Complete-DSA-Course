// Merge Sort Algorithm
// Problem:  Given an array of size n, sort the array using Merge Sort.

function merge(arr: number[], low: number, mid: number, high: number) {
  let temp: number[] = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergesort(arr: number[], low: number, high: number) {
  if (low >= high) return;

  let mid = Math.floor((low + high) / 2);
  mergesort(arr, low, mid);
  mergesort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}


let arr = [3,1,2,4,1,5,6,2,4];
mergesort(arr, 0, arr.length - 1);
console.log(arr);