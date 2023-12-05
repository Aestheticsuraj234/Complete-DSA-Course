
function countPairs(arr: number[], sum: number): number {
    let count = 0;
    let map = new Map<number, number>();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            count++;
        } else {
            map.set(sum - arr[i], i);
        }
    }
    return count;
}


console.log(countPairs([1, 5, 7, -1], 6));