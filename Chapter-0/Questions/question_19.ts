// find common elements In 3 sorted arrays
// space complexity: O(1)
// time complexity: O(n1 + n2 + n3)

class Solution {
    commonElements(arr1:Number[], arr2:Number[], arr3:Number[], n1:any, n2:any, n3:any):Number[] {
        let i:any = 0;
        let j:any = 0;
        let k:any = 0;
        let commonElements:Number[] = [];

        while (i < n1 && j < n2 && k < n3) {
            if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
                commonElements.push(arr1[i]);

                // Skip duplicates
                while (i < n1 - 1 && arr1[i] === arr1[i + 1]) {
                    i++;
                }
                while (j < n2 - 1 && arr2[j] === arr2[j + 1]) {
                    j++;
                }
                while (k < n3 - 1 && arr3[k] === arr3[k + 1]) {
                    k++;
                }

                i++;
                j++;
                k++;
            } else if (arr1[i] < arr2[j]) {
                i++;
            } else if (arr2[j] < arr3[k]) {
                j++;
            } else {
                k++;
            }
        }

        return commonElements;
    }
}

// Example usage:
const solution = new Solution();
const arr1 = [1, 5, 10, 20, 40,20, 80];
const arr2 = [6, 7, 20, 80, 100,20];
const arr3 = [3, 4, 15, 20, 30, 70,20, 80, 120];
const n1 = arr1.length;
const n2 = arr2.length;
const n3 = arr3.length;

const result = solution.commonElements(arr1, arr2, arr3, n1, n2, n3);
console.log("Common Elements:", result);

// for duplicates case also
