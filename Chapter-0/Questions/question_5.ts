
// * 5. Move all the negative elements to one side of the array 

// Path: Chapter-0/Questions/question_6.ts

class Solution_1 {
    segregateElements(arr: number[], n: number): void {
        let left = 0;
        let right = n - 1;

        while (left < right) {
            while (arr[left] < 0 && left < right) {
                left++;
            }

            while (arr[right] >= 0 && left < right) {
                right--;
            }

            if (left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
            }
        }
    }
}

const solution_1 = new Solution_1();
const arr_1 = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
const n_1 = arr_1.length;
solution_1.segregateElements(arr_1, n_1);
console.log(arr_1);


// * approach 2
class Solution_2 {
    segregateElements(arr: number[], n: number): void {
        let j = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] < 0) {
                if (i !== j) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
                j++;
            }
        }
    }
}

const solution_2 = new Solution_2();
const arr_2 = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
const n_2 = arr_2.length;
solution_2.segregateElements(arr_2, n_2);
console.log(arr_2);