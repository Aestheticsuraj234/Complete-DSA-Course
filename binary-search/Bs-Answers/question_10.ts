function MaximumSubArray(nums: number[], split: number) {
    let subArray = 1, splitArray = 0;
    for (let i: number = 0; i < nums.length; i++) {
        if (splitArray + nums[i] <= split) {
            splitArray += nums[i];
        } else {
            subArray++;
            splitArray = nums[i];
        }
    }
    return subArray;
}

function splitArray(nums: number[], k: number): number {
    let low = Math.max(...nums);
    let high = nums.reduce((a, b) => a + b, 0);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let NoSubArray = MaximumSubArray(nums, mid);
        if (NoSubArray > k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
}
