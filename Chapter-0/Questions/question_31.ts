// *Minimum swaps and K together

// *Given an array arr of n positive integers and a number k. One can apply a swap operation on the array any number of times, i.e choose any two index i and j (i < j) and swap arr[i] , arr[j] . Find the minimum number of swaps required to bring all the numbers less than or equal to k together, i.e. make them a contiguous subarray.

// Input :
// arr[ ] = {2, 1, 5, 6, 3}
// K = 3
// Output :
// 1
// Explanation:
// To bring elements 2, 1, 3 together,
// swap index 2 with 4 (0-based indexing),
// i.e. element arr[2] = 5 with arr[4] = 3
// such that final array will be-
// arr[] = {2, 1, 3, 6, 5}

// 1. Brute Force Approach:
function minimumSwapsBruteForce(arr: number[], k: number): number {
  let minSwaps = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > k && arr[j] <= k) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        minSwaps = Math.min(minSwaps, 1);
      }
    }
  }
  return minSwaps;
}

console.log(
  "Minimum Swaps Brute 🐢:",
  minimumSwapsBruteForce([2, 1, 5, 6, 3], 3)
); // Result: 1

// 2. Sliding Window Approach: ( better than brute force )

function minimumSwapsImproved(arr: number[], k: number): number {
    let left = 0;
    let right = 0;
    let bad = 0;
    let minSwaps = Number.MAX_SAFE_INTEGER;
  
    while (right < arr.length) {
      if (arr[right] > k) {
        bad++;
      }
      right++;
  
      while (left < right && bad > 0) {
        if (arr[left] > k) {
          bad--;
        }
        let tempBad = 0;
        for (let i = left + 1; i < right; i++) {
          if (arr[i] > k) {
            tempBad++;
          }
        }
        minSwaps = Math.min(minSwaps, tempBad);
        left++;
      }
    }
  
    return minSwaps;
  }
  

console.log(
  "Minimum Swaps Improved 🐇:",
  minimumSwapsImproved([2, 1, 5, 6, 3], 3)
); // Result: 1

// 3. Optimal Approach: ( best )
type PrefixSuffix = {
    countLessThanK: number;
    bad: number;
  };
  
  function minimumSwapsPrefixSuffix(arr: number[], k: number): number {
    const prefixSum: PrefixSuffix[] = [];
    let bad = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= k) {
        prefixSum.push({ countLessThanK: i + 1, bad });
      } else {
        bad++;
        prefixSum.push({ countLessThanK: 0, bad });
      }
    }
  
    let minSwaps = Number.MAX_SAFE_INTEGER;
  
    for (let i = 0; i < arr.length; i++) {
      const rightCount = arr.length - i - 1;
      const rightBad = prefixSum[prefixSum.length - 1].bad - prefixSum[i].bad;
      minSwaps = Math.min(minSwaps, rightCount - rightBad);
    }
  
    return minSwaps;
  }
  