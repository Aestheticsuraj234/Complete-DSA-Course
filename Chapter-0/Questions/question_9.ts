// 
// ## 9. Minimise the maximum difference between heights [V.IMP]

// Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

// You can find a slight modification of the problem here.
// Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.


// Input: K = 2, N = 4, Arr[] = {1, 5, 8, 10}
// Output: 5
class MinimizeMaxDiff {
    static getMinDiff(arr: number[], k: number, n: number): number {
      arr.sort((a,b)=>a-b);
      let min_ = arr[0];
      let max_ = arr[n-1];
      let ans = max_ - min_;
      for ( let i =0; i<n;i++) 
      {
         max_ = Math.max(arr[i-1]+k, arr[n-1]-k);
            min_ = Math.min(arr[0]+k, arr[i]-k);
            ans = Math.min(ans, max_-min_); 
      } 
        return ans;

    }
 
    


}


const arr = [1, 5, 8, 10];
const k = 2;
const n = arr.length;

console.log(MinimizeMaxDiff.getMinDiff(arr, k, n)); // Output: 5
