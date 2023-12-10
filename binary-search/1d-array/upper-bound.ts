// *# 3 Implement Lower Bound
// *`Problem Statement`: Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.

function UpperBound(arr: number[], target: number, n: number): number {
  let low = 0,
    high = n - 1;
  let ans = n;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

// @ts-ignore
let arr = [3, 5, 8, 15, 19];

// @ts-ignore
let n = 5, x = 9;
let UB = UpperBound(arr, n, x);
console.log("The upper bound is the index:", UB);