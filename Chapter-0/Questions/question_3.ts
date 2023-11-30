// *3. Kth smallest element
//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} l (starting index of the array i.e 0)
 * @param {number} r (ending index of the array i.e size-1)
 * @param {number} k
 * @return {number}
*/


class Solution {
    partition(arr: number[], l: number, r: number): number {
        const pivot = arr[r];
        let i = l - 1;

        for (let j = l; j < r; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
        return i + 1;
    }

    quickSelect(arr: number[], l: number, r: number, k: number): number {
        if (l <= r) {
            const partitionIndex = this.partition(arr, l, r);

            if (partitionIndex === k) {
                return arr[partitionIndex];
            } else if (partitionIndex < k) {
                return this.quickSelect(arr, partitionIndex + 1, r, k);
            } else {
                return this.quickSelect(arr, l, partitionIndex - 1, k);
            }
        }

        // If TypeScript doesn't infer the return type here, you can explicitly specify it:
        return 0; // Change this based on your actual return value
    }

    kthSmallest(arr: number[], l: number, r: number, k: number): number {
        if (k > 0 && k <= r - l + 1) {
            return this.quickSelect(arr, l, r, l + k - 1);
        } else {
            return -1; // Invalid input for k
        }
    }
}

const solution = new Solution();
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
const l = 0;
const r = arr.length - 1;
console.log(solution.kthSmallest(arr, l, r, k));
