// ## 20. Rearrange the array in alternating positive and negative items with O(1) extra space
// source👉 https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/

class Question20 {
  public reArrange(arr: number[]): Number[] {
    let positive = 0;
    let negative = 1;
    let ans: Number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        ans[negative] = arr[i];
        negative += 2;
      } else {
        ans[positive] = arr[i];
        positive += 2;
      }
    }
    return ans;
  }
}

const obj20 = new Question20();
console.log(obj20.reArrange([3, 1, -2, -5, 2, -4]));

// lets do for unequal number of positive and negative numbers

class Question20_2 {
  public reArrange(arr: any[]): Number[] {
    let pos: Number[] = [];
    let neg: Number[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        pos.push(arr[i]);
      } else {
        neg.push(arr[i]);
      }
    }

    if (pos.length > neg.length) {
      for (let i = 0; i < neg.length; i++) {
        arr[2 * i] = pos[i];
        arr[2 * i + 1] = neg[i];
      }
      let index = 2 * neg.length;
      for (let i = neg.length; i < pos.length; i++) {
        arr[index] = pos[i];
        index++;
      }
    } else {
      for (let i = 0; i < pos.length; i++) {
        arr[2 * i] = pos[i];
        arr[2 * i + 1] = neg[i];
      }
      let index = 2 * pos.length;
      for (let i = pos.length; i < neg.length; i++) {
        arr[index] = neg[i];
        index++;
      }
    }
    return arr;
  }
}

const obj20_2 = new Question20_2();
console.log(
  obj20_2.reArrange([
    3, 1, -2, -5, 2, -4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
);
