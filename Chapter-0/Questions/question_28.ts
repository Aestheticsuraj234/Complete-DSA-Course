// *Triplet Sum in Array

// brute force approach
function Triplet(arr: number[], n: number) {
  let st = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          let temp = [arr[i], arr[j], arr[k]];
          temp.sort((a, b) => a - b);
          st.add(temp);
        }
      }
    }
  }
  let ans = [st.has(0)];
  return ans;
}

// better approach

function findTriplets2(arr: number[], n: number) {
  let st = new Set<number>();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; i < n; j++) {
      let third = -(arr[i] + arr[j]);
      if (st.has(third)) {
        let temp = [arr[i], arr[j], third];
        temp.sort((a, b) => a - b);
      }
      st.add(arr[j]);
    }
  }
}

// Optimal approach

function findTriplets3(arr: number[], n: number) {
  arr.sort((a, b) => a - b); // sort the array
  let ans: number[][] = [];
  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let temp = [arr[i], arr[j], arr[k]];
        ans.push(temp);
        j++;
        k--;
        while (j < k && arr[j] === arr[j - 1]) j++;
        while (j < k && arr[k] === arr[k + 1]) k--;
      }
    }
  }
    return ans;
}

// Example Usage:
let arr2: number[] = [0, -1, 2, -3, 1];
let n2: number = arr.length;

console.log(Triplet(arr2, n2));
console.log(findTriplets2(arr2, n2));
console.log(findTriplets3(arr2, n2));
