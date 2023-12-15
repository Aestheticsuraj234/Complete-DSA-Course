// *Minimise Maximum Distance between Gas Stations
// ?Problem Statement: You are given a sorted array ‘arr’ of length ‘n’, which contains positive integer positions of ‘n’ gas stations on the X-axis. You are also given an integer ‘k’. You have to place ‘k’ new gas stations on the X-axis. You can place them anywhere on the non-negative side of the X-axis, even on non-integer positions. Let ‘dist’ be the maximum value of the distance between adjacent gas stations after adding k new gas stations.
// Find the minimum value of ‘dist’.

// ?Note: Answers within 10^-6 of the actual answer will be accepted. For example, if the actual answer is 0.65421678124, it is okay to return 0.654216. Our answer will be accepted if that is the same as the actual answer up to the 6th decimal place.


// 1. Brute Force Approach - O(n^2)


function minimiseMaxDistance(arr:number[], k:number) {
    const n = arr.length;
    let HowMany = new Array(n-1).fill(0);

    for(let gasStations = 1 ; gasStations <= k ; gasStations++) {
        let maxSection = -1;
        let maxIdx = -1;

        for(let i = 0 ; i<n-1; i ++)
        {
            let diff = arr[i+1] - arr[i];
            let sectionLength  = diff / (HowMany[i] + 1);

            if(sectionLength > maxSection)
            {
                maxSection = sectionLength;
                maxIdx = i;
            }
        }

        //insert the current gas station:
        HowMany[maxIdx]++;
     
    }

    // /Find the maximum distance i.e. the answer:
    let maxAns = -1;
    for (let i = 0; i < n - 1; i++) {
        const diff = arr[i + 1] - arr[i];
        const sectionLength = diff / (HowMany[i] + 1);
        maxAns = Math.max(maxAns, sectionLength);
    }
    return maxAns;


}


// const arr = [1, 2, 3, 4, 5];
// const k = 4;
// const ans = minimiseMaxDistance(arr, k);
// console.log("The answer is:", ans);


class MaxPriorityQueue {
    private queue: { priority: number; value: number }[];

    constructor() {
        this.queue = [];
    }

    enqueue(element: { priority: number; value: number }): void {
        this.queue.push(element);
        this.queue.sort((a, b) => b.priority - a.priority);
    }

    dequeue(): { priority: number; value: number } | undefined {
        return this.queue.shift();
    }

    front(): { priority: number; value: number } | undefined {
        return this.queue[0];
    }
}

function minimiseMaxDistanceBtr(arr: number[], k: number): number | undefined {
    const n = arr.length;
    const pq = new MaxPriorityQueue();
    const HowMany = new Array(n - 1).fill(0);

    // Insert the first k-1 gas stations into the priority queue with respective distances
    for (let i = 0; i < n - 1; i++) {
        pq.enqueue({ priority: arr[i + 1] - arr[i], value: i });
    }

    // Pick and place k gas stations
    for (let gasStations = 1; gasStations <= k; gasStations++) {
        // Find the maximum section and insert the gas station
        const tp = pq.dequeue();
        if (!tp) {
            return undefined;
        }
        const secInd = tp.value;

        // Insert the current gas station
        HowMany[secInd]++;

        // Fix the typo here, subtract instead of assign
        const inidiff = arr[secInd + 1] - arr[secInd];
        const newSecLen = inidiff / (HowMany[secInd] + 1);
        pq.enqueue({ priority: newSecLen, value: secInd });
    }

    const front = pq.front();
    return front ? front.priority : undefined;
}


// 3. Optimal Approach - O(nlogn)


// utils functions

function numberOfGasStationsRequired(dist:number, arr:number[]) {
    const n = arr.length; // size of the array
    let cnt = 0;
    for (let i = 1; i < n; i++) {
        const numberInBetween = Math.floor((arr[i] - arr[i - 1]) / dist);
        if ((arr[i] - arr[i - 1]) === dist * numberInBetween) {
            cnt += numberInBetween - 1;
        } else {
            cnt += numberInBetween;
        }
    }
    return cnt;
}

function minimiseMaxDistanceOpti(arr:number[], k:number) {
    const n = arr.length; // size of the array
    let low = 0;
    let high = 0;

    // Find the maximum distance:
    for (let i = 0; i < n - 1; i++) {
        high = Math.max(high, arr[i + 1] - arr[i]);
    }

    // Apply Binary search:
    const diff = 1e-6;
    while (high - low > diff) {
        const mid = (low + high) / 2.0;
        const cnt = numberOfGasStationsRequired(mid, arr);
        console.log("mid:", mid, "cnt:", cnt);
        if (cnt > k) {
            low = mid;
        } else {
            high = mid;
        }
    }
    return high;
}