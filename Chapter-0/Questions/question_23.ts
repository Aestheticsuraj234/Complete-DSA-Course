function subArrayWithMaxProduct(arr: number[]): number {
    let pre: number = 1;
    let suff: number = 1;
    let ans: number = Number.MIN_SAFE_INTEGER;
    let n: number = arr.length;

    for (let i: number = 0; i < n; i++) {
        if (pre === 0) {
            pre = 1;
        }
        if (suff === 0) {
            suff = 1;
        }
        pre = pre * arr[i];
        suff = suff * arr[n - i - 1];
        ans = Math.max(ans, Math.max(pre, suff));
    }
    return ans;
}

// Example usage
const arr: number[] = [6, -3, -10, 0, 2];
const result: number = subArrayWithMaxProduct(arr);
console.log("Result:", result);
