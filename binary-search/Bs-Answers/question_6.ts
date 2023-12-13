


function findDays(weights:number[], cap:number) {
    let days = 1; // First day.
    let load = 0;
    let n = weights.length; // size of array.
    for (let i = 0; i < n; i++) {
        if (load + weights[i] > cap) {
            days += 1; // move to next day.
            load = weights[i]; // load the weight.
        } else {
            // load the weight on the same day.
            load += weights[i];
        }
    }
    return days;
}


// 1. Brute Force Approach

function shipWithinDaysBrute(weights:number[], d:number) {
    let low = Math.max(...weights);
    let high = weights.reduce((sum, weight) => sum + weight, 0);
    for (let i = low; i <= high; i++) {
        let numberOfDays = findDays(weights, i);
        if (numberOfDays <= d) {
            return i;
        }
    }
    return -1;
}



// 2. Optimized Approach
function shipWithinDays(weights:number[], d:number) {
    // Find the maximum and the summation:
    let low = Math.max(...weights);
    let high = weights.reduce((sum, weight) => sum + weight, 0);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let numberOfDays = findDays(weights, mid);
        if (numberOfDays <= d) {
            // eliminate right half.
            high = mid - 1;
        } else {
            // eliminate left half.
            low = mid + 1;
        }
    }
    return low;
}


console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5));