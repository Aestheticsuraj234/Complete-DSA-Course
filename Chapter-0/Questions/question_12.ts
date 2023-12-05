// Merge 2 sorted arrays without using Extra space.
// Time Complexity: O(n*m)
// Space Complexity: O(1)

// give 2 sorted arrays, merge them without using extra space
// input: [1, 3, 5, 7], [0, 2, 6, 8, 9]
// output: [0, 1, 2, 3, 5, 6, 7, 8, 9]

// input: [10, 12], [5, 18, 20]
// output: [5, 10, 12, 18, 20]

function mergeSortedArrays(arr1: number[], arr2: number[]) {
    let i = 0;
    let j = 0;
    let n = arr1.length;
  

    while ( i < n)
    {
        if(arr1[i] > arr2[j])
            {
                let temp = arr1[i];
                arr1[i] = arr2[j];
                arr2[j] = temp;
                fixArray(arr2);
            }
        i++;
    }

    return arr1.concat(arr2);
};

function fixArray(arr2: number[]): void {
    for(let i = 1; i < arr2.length; i++)
    {
       if(arr2[i]<arr2[i-1])
       {
        let temp = arr2[i-1];
        arr2[i-1] = arr2[i];
        arr2[i] = temp;
       }
    }
}


console.log( mergeSortedArrays([1, 3, 5, 7], [0, 2, 6, 8, 9]))