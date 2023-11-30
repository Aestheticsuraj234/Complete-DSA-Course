// *1. Write a program to reverse an array or string?

// *Solution:
// *Method-1: Iterative Method
// *Time complexity: O(n)
// *Space Complexity: O(1)

function reverseArray(arr: number[]) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));

// *Method-2: Recursive Method
// *Time complexity: O(n)
// *Space Complexity: O(n)

function reverseArrayRecursive(arr: number[], start: number, end: number) {
 if(start >= end) return arr;
 [arr[start], arr[end]] = [arr[end], arr[start]];
 reverseArrayRecursive(arr, start+1, end-1);
}
let arr2 = [1, 2, 3, 4, 5];
reverseArrayRecursive(arr2, 0, arr2.length-1);
console.log(arr2);