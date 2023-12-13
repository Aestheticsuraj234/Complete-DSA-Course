// Kth Missing Positive Number
// Problem Statement: You are given a strictly increasing array ‘vec’ and a positive integer ‘k’. Find the ‘kth’ positive integer missing from ‘vec’.







// 1. `Brute Force Approach`
function missingK(vec:number[], n:number, k:number) {
    for (let i = 0; i < n; i++) {
        if (vec[i] <= k) k++; // shifting k.
        else break;
    }
    return k;
}









// 2. Optimized Approach

function findKthPositive(arr: number[], k: number): number {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let missing = arr[mid] - (mid + 1);

        if (missing < k) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }

    }
    return k + high + 1;
};