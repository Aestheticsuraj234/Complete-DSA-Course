// Find the Smallest Divisor Given a Threshold
// Problem Statement: You are given an array of integers ‘arr’ and an integer i.e. a threshold value ‘limit’. Your task is to find the smallest positive integer divisor, such that upon dividing all the elements of the given array by it, the sum of the division’s result is less than or equal to the given threshold value.


// utils function to find the sum of the division's result

function sumOfDivisions(arr: number[], divisor: number): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.ceil(arr[i] / divisor);
  }
  return sum;
}

function findMax(arr: number[]): number {
  let maxi = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    maxi = Math.max(maxi, arr[i]);
  }
  return maxi;
}



// 1. Brute Force Approach

function smallestDivisorBrute(arr: number[], limit: number): number {
  let ans = -1;
  for (let i = 1; i <= findMax(arr); i++) {
    let sum = sumOfDivisions(arr, i);
    if (sum <= limit) {
      ans = i;
      break;
    }
  }
  return ans;
}








// 2. Optimized Approach

function smallestDivisor(arr: number[], limit: number): number {
  let low = 1 , high = findMax(arr);
  let ans = -1;

  while(low <= high)
  {
    let mid = Math.floor((low+high)/2);

    let sum = sumOfDivisions(arr,mid);
    if(sum <= limit)
    {
        ans = mid;
        high = mid-1;
      
    }
    else 
    {
      low = mid+1;
    }

  }
    return ans;
}

console.log(smallestDivisor([1,2,5,9],6));