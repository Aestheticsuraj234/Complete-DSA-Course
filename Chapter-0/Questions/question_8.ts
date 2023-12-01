// find Largest sum contiguous Subarray [V. IMP]

// Input: [-2, -3, 4, -1, -2, 1, 5, -3]
// Output: 7
// Explanation: 4 + (-1) + (-2) + 1 + 5 = 7

function maxSubArraySum(arr: number[]): number {
  // Initialize variables to keep track of maximum sum ending at the current position
  // and the global maximum subarray sum.
  let sum = 0;
  let maxi = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    maxi = Math.max(maxi, sum);
    if(sum < 0) {
      sum = 0;
    }

  }
  return maxi;
}

console.log(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));