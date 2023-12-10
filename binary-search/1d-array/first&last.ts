// *6. First and Last Occurrences in Array
// *`Problem Statement`: Given a sorted array arr of n integers and a target value k. Write a program to find the indices of the first and the last occurrences of the target value. If the target is not found then return -1 as indices.

function firstOccurrence(nums: number[], target: number): number {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    let first = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            first = mid;
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return first;
}

function lastOccurrence(nums: number[], target: number): number {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    let last = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            last = mid;
            low = mid + 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return last;
}

function searchRange(nums: number[], target: number): number[] {
    let ft = firstOccurrence(nums, target);
    
    if (ft === -1) {
        return [-1, -1];
    }

    let lst = lastOccurrence(nums, target);
    return [ft, lst];
}


// @ts-ignore
let a = [3, 4, 6, 6, 6,6,6,6,6,6,9, 12, 6, 17];
// @ts-ignore
let target = 6;
// @ts-ignore
let ind = searchRange(a, target);
console.log("The target is at index:", ind);


// Count Occurrences in Sorted Array

// Problem Statement: Given a sorted array arr of n integers and a target value k. Write a program to find the total number of occurrences of k in the array.

function countOccurrences(nums: number[], target: number): number {
    let first = firstOccurrence(nums, target);
    if (first === -1) {
        return 0;
    }
    let last = lastOccurrence(nums, target);

    return last - first + 1;
}


console.log("The Number Of Occurences:", countOccurrences(a, target));