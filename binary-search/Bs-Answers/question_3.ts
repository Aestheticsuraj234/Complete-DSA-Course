// 1. Brute Force Approach
function findMax(v: number[]): number {
  let maxi = -Infinity;
  let n = v.length;
  // Find the maximum
  for (let i = 0; i < n; i++) {
    maxi = Math.max(maxi, v[i]);
  }
  return maxi;
}

function calculateTotalHours(v: number[], hourly: number) {
  let totalH = 0;
  let n = v.length;
  // Find total hours
  for (let i = 0; i < n; i++) {
    totalH += Math.ceil(v[i] / hourly);
  }
  return totalH;
}

function minimumRateToEatBananas(v: number[], h: number): number {
  // Find the maximum number
  let maxi = findMax(v);

  // Find the minimum value of k
  for (let i = 1; i <= maxi; i++) {
    let reqTime = calculateTotalHours(v, i);
    if (reqTime <= h) {
      return i;
    }
  }

  // Dummy return statement
  return maxi;
}

let v = [7, 15, 6, 3];
let h = 8;
let ans = minimumRateToEatBananas(v, h);
console.log("Koko should eat at least " + ans + " bananas/hr.");

// 2. Optimized Approach

function MinEatingRateOptimal(v: number[], h: number) {
  let low = 1,
    high = findMax(v);
  let ans = Number.MAX_SAFE_INTEGER;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let totalHour = calculateTotalHours(v, mid);
    if (totalHour <= h) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
    return ans;
}

console.log(MinEatingRateOptimal([7, 15, 6, 3], 8));
