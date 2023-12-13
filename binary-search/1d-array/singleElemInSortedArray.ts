// Search Single Element in a sorted array
// Problem Statement: Given an array of N integers. Every number in the array except one appears twice. Find the single number in the array.

// Pre-requisite: Binary Search Algorith

// 1. Brute Force -- using linear search

// Time Complexity: O(n)
// Space Complexity: O(1)

function singleNonDuplicate(arr: number[]): number {
  var n = arr.length; // Size of the array
  if (n === 1) return arr[0];

  for (var i = 0; i < n; i++) {
    // Check for first index
    if (i === 0) {
      if (arr[i] !== arr[i + 1]) return arr[i];
    }
    // Check for last index
    else if (i === n - 1) {
      if (arr[i] !== arr[i - 1]) return arr[i];
    } else {
      if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) return arr[i];
    }
  }

  // Dummy return statement
  return -1;
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2

// 2. Optimal Approach(Using Binary Search):

// time complexity: O(logn)
// space complexity: O(1)

function singleNonDuplicate2(arr: number[]): number {
  let n = arr.length;
  if (n == 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) {
      return arr[mid];
    }
    if (
      (mid % 2 == 1 && arr[mid - 1] === arr[mid]) ||
      (mid % 2 == 0 && arr[mid] === arr[mid + 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
