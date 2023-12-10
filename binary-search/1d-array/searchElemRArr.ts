// Search Element in a Rotated Sorted numsay
// Problem Statement: Given an integer numsay nums of size N, sorted in ascending order (with distinct values) and a target value k. Now the numsay is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.


function search(nums: number[], target: number): number {
    let n = nums.length;
    let low = 0, high = n - 1;

    while ( low <= high)
    {
        let mid = Math.floor((low + high) / 2);
        if(nums[mid]===target) return mid;

        // ?left half is sorted

        if(nums[low] <= nums[mid])
        {
            if(nums[low] <= target && target <= nums[mid])
            {
                high = mid - 1;
            }
            else 
            {
                low = mid + 1;
            }
        }
        else
        {
            if(nums[mid] <= target && target <= nums[high])
            {
                low = mid + 1;
            }
            else 
            {
                high = mid - 1;
            }
        }
    }
    return -1;
}

console.log(search([4,5,6,7,0,1,2], 6));