// memoization

function fib(n: number, dp: number[] = new Array(n + 1).fill(-1)): number {
    if (n <= 1) return n;
    if (dp[n] !== -1) return dp[n];
  
    dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
    return dp[n];
  }
  
  console.log(fib(5));
  

//   tabulation

function fibT(n: number): number {
    const dp = new Array(n + 1).fill(-1);
    dp[0] = 0;
    dp[1] = 1;
  
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  
    return dp[n];
  }
  
  console.log(fib(5));

//   with space opti

function fibSO(n: number): number {
    let a = 0;
    let b = 1;
  
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
  
    return b;
  }
  
  console.log(fib(5));