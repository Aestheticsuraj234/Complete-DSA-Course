// *11. Find duplicate in an array of N+1 Integers.

// *Solution 1: Using mark visited approach as seting index value to negative

export function findDuplicate(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    let index = Math.abs(arr[i]);
    if (arr[index] < 0) return index;
    arr[index] = -arr[index];
  }
  return -1;
}

// *Solution 2: Using Floyd's Tortoise and Hare (Cycle Detection)

export function findDuplicate2(arr: number[]): number {
  let slow = arr[0];
  let fast = arr[0];

  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while (slow !== fast);

  fast = arr[0];
  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[fast];
  }

  return slow;
}

// *Solution 3: Using sorting

export function findDuplicate3(arr: number[]): number {
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return arr[i];
  }
  return -1;
}

// *Solution 4: Using Hashing

export function findDuplicate4(arr: number[]): number {
  let hash: { [key: number]: number } = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) return arr[i];
    hash[arr[i]] = 1;
  }
  return -1;
}

// *Solution 5: Using Binary Search

export function findDuplicate5(arr: number[]): number {
  let low = 1;
  let high = arr.length - 1;
  let mid = Math.floor((low + high) / 2);

  while (low < high) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= mid) count++;
    }
    if (count > mid) high = mid;
    else low = mid + 1;
    mid = Math.floor((low + high) / 2);
  }
  return mid;
}

// *Solution 6: Using XOR

export function findDuplicate6(arr: number[]): number {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res ^= arr[i];
  }
  for (let i = 1; i < arr.length; i++) {
    res ^= i;
  }
  return res;
}

// *Solution 7: Using Summation

export function findDuplicate7(arr: number[]): number {
  let n = arr.length - 1;
  let sum = (n * (n + 1)) / 2;
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return arrSum - sum;
}

// *Solution 8: Using Set

export function findDuplicate8(arr: number[]): number {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return arr[i];
    set.add(arr[i]);
  }
  return -1;
}

// *Solution 9: Using Map

export function findDuplicate9(arr: number[]): number {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) return arr[i];
    map.set(arr[i], 1);
  }
  return -1;
}

// *Solution 10: Using Count Array

export function findDuplicate10(arr: number[]): number {
  let count = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
    if (count[arr[i]] > 1) return arr[i];
  }
  return -1;
}

// *Solution 11: Using Count Array (Optimized)

export function findDuplicate11(arr: number[]): number {
  let count = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (count[i] > 1) return i;
  }
  return -1;
}

const arr = [1, 3, 4, 2, 2];
const arr2 = [3, 1, 3, 4, 2];
const arr3 = [1, 1];
const arr4 = [1, 1, 2];
const arr5 = [2, 2, 2, 2, 2];

// Test Cases:
console.log(findDuplicate(arr));
console.log(findDuplicate(arr2));
console.log(findDuplicate(arr3));
console.log(findDuplicate(arr4));
console.log(findDuplicate(arr5));