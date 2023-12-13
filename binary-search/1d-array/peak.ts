// Peak element in Array
// Problem Statement: Given an array of length N. Peak element is defined as the element greater than both of its neighbors. Formally, if ‘arr[i]’ is the peak element, ‘arr[i – 1]’ < ‘arr[i]’ and ‘arr[i + 1]’ < ‘arr[i]’. Find the index(0-based) of a peak element in the array. If there are multiple peak numbers, return the index of any peak number.

// 1. Brute Force -- using linear search

// Time Complexity: O(n)

// Space Complexity: O(1)

function findPeakElement(arr: number[]): number {
  let n = arr.length;
  if (n == 1) return 0;
  if (arr[0] >= arr[1]) return 0;
  if (arr[n - 1] >= arr[n - 2]) return n - 1;

  for (let i = 1; i < n - 1; i++) {
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
  }

  // Dummy return statement
  return -1;
}

// 2. Optimal Approach(Using Binary Search):

function findPeakElement2(arr: number[]): number {
  let n = arr.length;
  if (n == 1) return arr[0];
  if (arr[0] > arr[1]) return 1;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  let low = 0,
    high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);


    if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) return mid;

    else if ( arr[mid] > arr[mid-1])
    {
        low = mid+1;
    }
    else 
    {
        high = mid-1;
        
    }
    


}
// Dummy return statement
return -1;
}

console.log(findPeakElement2([1, 2, 3, 1])); // 2
