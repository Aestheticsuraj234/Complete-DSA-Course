// Aggressive Cows : Detailed Solution
// Problem Statement: You are given an array ‘arr’ of size ‘n’ which denotes the position of stalls.
// You are also given an integer ‘k’ which denotes the number of aggressive cows.
// You are given the task of assigning stalls to ‘k’ cows such that the minimum distance between any two of them is the maximum possible.
// Find the maximum possible minimum distance.

// Brute Force Approach

function isPossible(arr: number[], dist: number, cows: number) {
  let cowCount = 1;
  let last = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - last >= dist) {
      cowCount++;
      last = arr[i];
    }
  }
  if (cowCount >= cows) {
    return true;
  } else return false;
}

function aggressiveCowsBrute(arr: number[], cows: number) {
    let n = arr.length;
    arr.sort((a, b) => a - b);
    let limit = arr[n - 1] - arr[0];

    for (var i = 1; i <= limit; i++) {
        if (isPossible(arr, i, cows) === false) {
            return i - 1;
        }
    }
    return limit;


}



// *2. Optimized Approach

function aggressiveCows(arr: number[], cows: number) {
    arr.sort((a, b) => a - b);
    let n = arr.length;
    let low = 0 , high = arr[n-1] - arr[0];
    let ans = -1;

    while(low<=high)
    {
        let mid = Math.floor((low+high)/2);
        if(isPossible(arr,mid,cows))
        {
            ans= mid;
            low = mid+1;
        }
        else 
        {
            high = mid-1;
        }
    }
    return ans;
}

