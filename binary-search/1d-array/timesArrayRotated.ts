// Find out how many times the array has been rotated
// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find how many times the array has been rotated.

// 1. Brute Force -- using linear search

// Time Complexity: O(n)
// Space Complexity: O(1)

function findNumberOfRotations(arr: number[]): number {
  let ans = Number.MAX_SAFE_INTEGER;
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (ans > arr[i]) {
      ans = arr[i];
      index = i;
    }
  }
  return index;
}

console.log(findNumberOfRotations([4, 5, 6, 7, 1, 2])); // 4

// 2. Optimal Approach(Using Binary Search):
// time complexity: O(logn)
// space complexity: O(1)

function findOptimalNumberOfRotations(arr: number[]): number {
  let low = 0,
    high = arr.length - 1;
  let ans = Number.MAX_SAFE_INTEGER;
  let index = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[high]) {
      if (ans > arr[low]) {
        ans = arr[low];
        index = low;
      }
      break;
    }

    if (arr[low] <= arr[mid]) {
      if (arr[low] < ans) {
        ans = arr[low];
        index = low;
      }
      low = mid + 1;
    } else {
      if (arr[mid] < ans) {
        ans = arr[mid];
        index = mid;
      }
      high = mid - 1;
    }
  }
  return index;
}

console.log(findOptimalNumberOfRotations([4, 5, 6, 7, 1, 2])); // 4