// How to write 1-D Recurrence relation / Climbing Stairs
// In this article, we will learn to write 1-D Recurrence relations using the problem “Climbing Stairs”

// Problem Statement: Given a number of stairs. Starting from the 0th stair we need to climb to the “Nth” stair. At a time we can climb either one or two steps. We need to return the total number of distinct ways to reach from 0th to Nth stair.

// tabulation solution
function climbStairs(
  n: number,
  dp: number[] = new Array(n + 1).fill(-1)
): number {
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp);
  return dp[n];
}


// memoization solution

function climbStairsMemo(n: number, dp: number[] = new Array(n + 1).fill(-1)): number {
  if (n <= 1) return 1;
  if (dp[n] !== -1) return dp[n];

  dp[n] = climbStairsMemo(n - 1, dp) + climbStairsMemo(n - 2, dp);
  return dp[n];
}


// space optimized solution

function climbStairsSO(n: number): number {
  let a = 1;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}