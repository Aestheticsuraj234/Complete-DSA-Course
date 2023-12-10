// *Problem Statement: You are given a sorted array arr of distinct values and a target value x. You need to search for the index of the target value in the array.


function binarySearch(nums: number[], target: number): number {
  let n = nums.length; // size of the array
  let low = 0, high = n - 1;

  // Perform the steps:
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
// @ts-ignore
let a = [3, 4, 6, 7, 9, 12, 16, 17];
// @ts-ignore
let target = 6;
// @ts-ignore
let ind = binarySearch(a, target);
console.log("The target is at index:", ind);