// *Selection Sort Algorithm
// *Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.

class SelectionSort {
  static selection_sort(arr: number[], n: number): number[] {
    for (let i = 0; i < n-1; i++) {
      let _mini = i;
      for (let j = i+1; j < n; j++) {
        if (arr[j] <= arr[_mini]) {
          _mini = j;
        }
      }

      let temp = arr[_mini];
            arr[_mini] = arr[i];
            arr[i] = temp;
    }
    return arr;
  }
}

console.log(SelectionSort.selection_sort([13,46,24,52,20,9], 6));
