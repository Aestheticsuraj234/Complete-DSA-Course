// *Bubble Sort Algorithm
// *Problem Statement: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.

class BubbleSort {
  static bubble_sort(arr: number[], n: number): number[] {
    for (let i = n - 1; i >= 1; i--) {
      let isSwapped = 0;
      for (let j = 0; j <= i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          isSwapped = 1;
        }
      }
      if (isSwapped === 0) break;
      console.log("runs");
    }
    return arr;
  }
}

console.log(BubbleSort.bubble_sort([11, 22, 3,34, 5, 6], 6));
