// *Nth Root of a Number using Binary Search

// Problem Statement: Given two numbers N and M, find the Nth root of M. The nth root of a number M is defined as a number X when raised to the power N equals M. If the ‘nth root is not an integer, return -1.


// !1. Brute Force Approach

function nthRoot(n: number, m: number): number {
    let ans = 0;
    for (let i = 0; i <= m; i++) {
        let val = Math.pow(i, n);
        if (val <= m) {
        ans = i;
        } else {
        break;
        }
    }
    return ans;
}

console.log(nthRoot(3, 27));


//  !2. Optimized Approach

function OptiNthRoot(n: number, m: number): number {
  let low = 1 , high = m;
  while(low<=high)
  {
    let mid = Math.floor((low+high)/2);

    if(Math.pow(mid,n)===m)
    {
      return mid;
    }
    else if(Math.pow(mid,n)<m)
    {
      low = mid+1;
    }
    else 
    {
      high = mid-1;
    }
  }
    return -1;

}

console.log(OptiNthRoot(3, 27));