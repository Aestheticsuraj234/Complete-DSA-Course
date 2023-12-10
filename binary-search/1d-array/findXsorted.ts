// *Binary search to find x in sorted array

// Time complexity: O(log(n))
// Space complexity: O(1)


function binarySearch(nums:number[], target:number):number {
    let n = nums.length; // size of the array
    let low = 0, high = n - 1;

    // Perform the steps:
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        else if (target > nums[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

let a = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 6;
let ind = binarySearch(a, target);
if (ind === -1) console.log("The target is not present.");
else console.log("The target is at index:", ind);


