// Search in a row and column-wise sorted matrix
// Problem Statement: You have been given a 2-D array ‘mat’ of size ‘N x M’ where ‘N’ and ‘M’ denote the number of rows and columns, respectively. The elements of each row and each column are sorted in non-decreasing order.
// But, the first element of a row is not necessarily greater than the last element of the previous row (if it exists).
// You are given an integer ‘target’, and your task is to find if it exists in the given ‘mat’ or not.





// brute force



function searchElement(matrix, target) {
    const n = matrix.length, m = matrix[0].length;

    // traverse the matrix:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === target)
                return true;
        }
    }
    return false;
}



// better approach




function binarySearch(nums:number[], target:number) {
    const n = nums.length; // size of the array
    let low = 0, high = n - 1;

    // Perform the steps:
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return true;
        else if (target > nums[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return false;
}

function __searchElement(matrix:number[][], target:number) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        const flag = binarySearch(matrix[i], target);
        if (flag) return true;
    }
    return false;
}



// optimal approach


function __searchElementOptimal(matrix:number[][] , target:number)
{
    let n = matrix.length;
    let m = matrix[0].length;

    let row = 0 , col = m-1;

    while(row<n && col>=0)
    {
        if(matrix[row][col] === target) return true;
        else if(matrix[row][col] < target) row++;
        else col--;
    }
    return false;
}

