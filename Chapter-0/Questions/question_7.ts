// Write a program to cyclically rotate an array by one.

// Path: Chapter-0/Questions/question_8.ts

// * approach 1
// time complexity: O(n)
// space complexity: O(1)

class cyclically_rotate_array_1 {
  
    rotate(arr: number[], n: number): void {
        let lastElement = arr[n - 1];
        for(let i = n - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        // 
        arr[0] = lastElement;
        

    }


}

const solution_1_1 = new cyclically_rotate_array_1();
const arr_1_1 = [1, 2, 3, 4, 5];
const n_1_1 = arr_1_1.length;
solution_1_1.rotate(arr_1_1, n_1_1);
console.log(arr_1_1);