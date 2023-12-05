function nextPermutation(nums: number[]): void {
    const n = nums.length;

    // *Step 1: Find the first decreasing element from the right
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // *Step 2: Find the smallest element to the right of nums[i] and greater than nums[i]
    if (i >= 0) {
        let j = n - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }

        // *Step 3: Swap the two elements
        swap(nums, i, j);
    }

    // *Step 4: Reverse the elements to the right of nums[i]
    reverse(nums, i + 1);
}

function swap(nums: number[], i: number, j: number): void {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function reverse(nums: number[], start: number): void {
    let i = start;
    let j = nums.length - 1;
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}

const nums = [1, 2, 3];
console.log(`Before: ${nums}`);
nextPermutation(nums);
console.log(`After: ${nums}`);