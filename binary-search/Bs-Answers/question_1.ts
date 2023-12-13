// Finding Sqrt of a number using Binary Search
// Problem Statement: You are given a positive integer n. Your task is to find and return its square root. If ‘n’ is not a perfect square, then return the floor value of ‘sqrt(n)’.

// 1. Brute Force Approach

function sqrt(n: number): number {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    let val = i * i;
    if (val <= n) {
      ans = i;
    } else {
      break;
    }
  }
  return ans;
}

console.log(sqrt(10));

// Optimized Approach

function OptiSqrt(n: number): number {
  let low = 1;
  let high = n;
  let ans = 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid <= n) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}


console.log(OptiSqrt(37));