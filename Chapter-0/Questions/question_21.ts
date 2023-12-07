
// ## 21. Find if there is any subarray with sum equal to 0


// Path: Chapter-0/Questions/question_21.ts

// Given an array of positive and negative numbers, find if there is a subarray (of size at-least one) with 0 sum.


function subArraySum(arr: number[]): any {
   //using map to store the prefix sum which has appeared already.
   let sumMap = new Map();
        
   let sum = 0;
   //iterating over the array.
   for (let i = 0 ; i < arr.length ; i++)
   {
       //storing prefix sum.
       sum += arr[i];

       //if prefix sum is 0 or if it is already present in map then it is
       //repeated which means there is a subarray whose summation was 0,
       //so we return true.
       if (sum == 0 || sumMap.has(sum) == true)
           return true;
           
       //storing true in map for every prefix sum obtained.
       sumMap.set(sum, true);
   }
   //returning false if we don't get any subarray with 0 sum.
   return false;
}


console.log(subArraySum([4, 2, -3, 1, 6]));  // Yes
console.log(subArraySum([2 , 21 , 90 ]));  // Yes