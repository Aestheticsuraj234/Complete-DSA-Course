// *Find whether an array is a subset of another array🍒

function smallestSubarrayWithSum(arr: number[], x: number): number {
  let n: number = arr.length;
  let min_len: number = Infinity;
  let curr_sum: number = 0;
  let start: number = 0;

  for (let i = 0; i < n; i++) {
    curr_sum += arr[i];

    if (curr_sum > x) {
      while (curr_sum > x) {
        min_len = Math.min(min_len, i - start + 1);
        curr_sum -= arr[start];
        start++;
      }
    }
  }

  if (min_len === Infinity) return 0;
  return min_len;
}


// Example Usage:
let arr1: number[] = [1, 4, 45, 6, 0, 19];
let x: number = 51;

console.log(smallestSubarrayWithSum(arr1, x));