// Count Inversions

function mergeSort(arr: number[]): [number[], number] {
    if (arr.length <= 1) {
        return [arr, 0];
    }

    const mid = Math.floor(arr.length / 2);
    const [left, invCountLeft] = mergeSort(arr.slice(0, mid));
    const [right, invCountRight] = mergeSort(arr.slice(mid));

    const [merged, invCountMerge] = merge(left, right);
    const totalInvCount = invCountLeft + invCountRight + invCountMerge;

    return [merged, totalInvCount];
}

function merge(left: number[], right: number[]): [number[], number] {
    const merged: number[] = [];
    let invCount = 0;
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            invCount += left.length - i; // Count inversions
            j++;
        }
    }

    while (i < left.length) {
        merged.push(left[i]);
        i++;
    }

    while (j < right.length) {
        merged.push(right[j]);
        j++;
    }

    return [merged, invCount];
}

// Example usage
const [sortedArray, inversionCount] = mergeSort([2, 4, 1, 3, 5]);
console.log("Sorted Array:", sortedArray);
console.log("Inversion Count:", inversionCount);
console.log(mergeSort([2, 4, 1, 3, 5]));