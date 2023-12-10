// # 5 Floor & ceil in Sorted Array;
// `Problem Statemen`t: You’re given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in `arr[0..n-1]`.


// *#1 Implement Floor
// *`Problem Statement`: Given a sorted array of N integers and an integer x, write a program to find the floor of x.
// *`Floor of x is defined as the largest element K in arr[] such that K is smaller than or equal to x.`
// *`If floor exists, then return index of it, else return -1.`
// *`Example:`


// function Floor(arr: number[], target: number, n: number): number {
//   let low = 0,
//     high = n - 1;
//   let ans = -1;

  
//   while(low <= high)
//   {
//     let mid = Math.floor((low + high) / 2);

//     if(arr[mid] >= target)
//     {
//       ans = mid;
//       high = mid - 1;
//     }
//     else {
//         low = mid + 1;

//     }

//   }
//     return ans;

// }

// // @ts-ignore
// let arr = [3, 5, 8, 15, 19];
// // @ts-ignore
// let n = 5, x = 9;
// let FLR = Floor(arr, n, x);
// console.log("The floor is the index:", FLR);


// *#2 Implement Ceil
// *`Problem Statement`: Given a sorted array of N integers and an integer x, write a program to find the ceil of x.

function Ceil(arr: number[], target: number, n: number): number {
  let low = 0,
    high = n - 1;
  let ans = -1;

  
  while(low <= high)
  {
    let mid = Math.floor((low + high) / 2);

    if(arr[mid] <= target)
    {
      ans = mid;
      low = mid + 1;
    }
    else {
        high = mid - 1;

    }

  }
    return ans;

}

// @ts-ignore
let arr = [3, 5, 8, 15, 19];
// @ts-ignore
let n = 5, x = 9;
let CL = Ceil(arr, n, x);
console.log("The ceil is the index:", CL);