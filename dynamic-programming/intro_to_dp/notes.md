Certainly! Here is the provided content converted into Markdown (md) format:

```markdown
# Dynamic Programming Introduction

## Problem Statement: Introduction To Dynamic Programming

In this article, we will understand the concept of dynamic programming.

Dynamic Programming can be described as storing answers to various sub-problems to be used later whenever required to solve the main problem.

The two common dynamic programming approaches are:

1. **Memoization:** Known as the “top-down” dynamic programming, usually the problem is solved in the direction of the main problem to the base cases.
2. **Tabulation:** Known as the “bottom-up” dynamic programming, usually the problem is solved in the direction of solving the base cases to the main problem.
   - Note: The base case does not always mean smaller input. It depends upon the implementation of the algorithm.

## The flow of this article will be as follows:

1. We will use the example of Fibonacci numbers.
2. The series is called the Fibonacci series: `0, 1, 1, 2, 3, 5, 8, 13, 21, ...`.
3. We need to find the nth Fibonacci number, where n is based on a 0-based index.

## Solution

### Part – 1: Memoization

As every number is equal to the sum of the previous two terms, the recurrence relation can be written as:

```
f(n) = f(n-1) + f(n-2)
```

The basic pseudo-code for the problem will be given as:

```cpp
int f(int n, vector<int>& dp){
    if(n<=1) return n;
    
    if(dp[n]!= -1) return dp[n];
    return dp[n]= f(n-1,dp) + f(n-2,dp);
}
```

#### Dry Run:

1. Declare a dp[] array of size n+1 and initialize it to -1.
2. For n=5, the value of dp[5] is equal to -1, therefore we need to compute its value and go to the inner recursive calls.
3. Traverse back after solving n=2, update its dp array value to 1.
4. For the second recursive call f(n=4), dp[2] is not equal to -1, return the value at dp[2] as our answer. Hence we get the answer of f(n=4) as 3 (2+1).
5. Similarly, for the second recursive call f(n=5), we get dp[3] as 2. Compute for n=5 as 5 (2+3).

```cpp
#include <bits/stdc++.h>

using namespace std;

int f(int n, vector<int>& dp){
    if(n<=1) return n;
    
    if(dp[n]!= -1) return dp[n];
    return dp[n]= f(n-1,dp) + f(n-2,dp);
}

int main() {
  int n=5;
  vector<int> dp(n+1,-1);
  cout<<f(n,dp);
  return 0;
}
```

**Output:** 5

**Time Complexity:** O(N)

**Space Complexity:** O(N)

### Part - 2: Tabulation

Tabulation is a ‘bottom-up’ approach where we start from the base case and reach the final answer.

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
  int n=5;
  vector<int> dp(n+1,-1);
  
  dp[0]= 0;
  dp[1]= 1;
  
  for(int i=2; i<=n; i++){
      dp[i] = dp[i-1]+ dp[i-2];
  }
  cout<<dp[n];
  return 0;
}
```

**Output:** 5

**Time Complexity:** O(N)

**Space Complexity:** O(N)

### Part 3: Space Optimization

If we closely look at the relation `dp[i] = dp[i-1] + dp[i-2]`, we see that for any i, we do need only the last two values in the array. Therefore, there's no need to maintain a whole array for it.

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
  int n=5;
  
  int prev2 = 0;
  int prev = 1;
  
  for(int i=2; i<=n; i++){
      int cur_i = prev2+ prev;
      prev2 = prev;
      prev= cur_i;
  }
  cout<<prev;
  return 0;
}
```

**Output:** 5

**Time Complexity:** O(N)

**Space Complexity:** O(1)
```

This Markdown format should provide a clear and readable representation of the original content.