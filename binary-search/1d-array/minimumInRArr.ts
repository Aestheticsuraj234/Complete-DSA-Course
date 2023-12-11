// *Minimum in Rotated Sorted Array
// *Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array.

// 1. Brute Force -- using linear search

// Time Complexity: O(n)
// Space Complexity: O(1)

function findMin(arr: number[]): number {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
  }
  return min;
}

console.log(findMin([4, 5, 6, 7, 1, 2])); // 0

// 2. Optimal Approach(Using Binary Search):
// time complexity: O(logn)
// space complexity: O(1)
function findOptimalMin(arr: number[]): number {
  let low = 0,
    high = arr.length - 1;
  let ans = Number.MAX_SAFE_INTEGER;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[mid]) {
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, arr[mid]);
      high = mid - 1;
    }
  }
  return ans;
}

console.log(findOptimalMin([4, 5, 6, 7, 1, 2])); // 0

// 3. Optimal Approach(Using Binary Search):

// time complexity: O(logn)
// space complexity: O(1)
function findOptimalMin2(arr: number[]): number {
  let low = 0,
    high = arr.length - 1;
  let ans = Number.MAX_SAFE_INTEGER;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[high]) {
      ans = Math.min(ans, arr[low]);
      break;
    }
    if (arr[low] <= arr[mid]) {
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, arr[mid]);
      high = mid - 1;
    }
  }
  return ans;
}

console.log(findOptimalMin2([4, 5, 6, 7, 1, 2])); // 0