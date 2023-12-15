// Find the row with maximum number of 1’s
// Problem Statement: You have been given a non-empty grid ‘mat’ with ‘n’ rows and ‘m’ columns consisting of only 0s and 1s. All the rows are sorted in ascending order.
// Your task is to find the index of the row with the maximum number of ones.
// Note: If two rows have the same number of ones, consider the one with a smaller index. If there’s no row with at least 1 zero, return -1.





// Brute Force Approach O(n*m)



function Find_Max_Ones(arr:number[][])
{
    let cnt_max = 0 , index = -1;
    for(let i = 0 ; i <arr.length-1;i++)
    {
        let cnt_ones = 0;
        for(let j = 0 ; j<arr[i].length-1;j++)
        {
         cnt_ones += arr[i][j];
        }
        if(cnt_ones>cnt_max)
        {
            cnt_max = cnt_ones;
            index = i;
        }
    }
    return index;
}

console.log(Find_Max_Ones([[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]]));


// optimized approach O(n+m);



function lowerBound(arr:number[], n:number, x:number) {
    let low = 0, high = n - 1;
    let ans = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        if (arr[mid] >= x) {
            ans = mid;
            // look for smaller index on the left
            high = mid - 1;
        } else {
            low = mid + 1; // look on the right
        }
    }
    return ans;
}

function rowWithMax1s(matrix:number[][], n:number, m:number) {
    let cnt_max = 0;
    let index = -1;

    // traverse the rows:
    for (let i = 0; i < n; i++) {
        // get the number of 1's:
        let cnt_ones = m - lowerBound(matrix[i], m, 1);
        if (cnt_ones > cnt_max) {
            cnt_max = cnt_ones;
            index = i;
        }
    }
    return index;
}

const matrix = [[1, 1, 1], [0, 0, 1], [0, 0, 0]];
const n = 3, m = 3;
console.log("The row with maximum no. of 1's is: " + rowWithMax1s(matrix, n, m));


// 2. better approach 

    function    binarySearch(arr:number[], target:number) {
        let n = arr.length; // size of the array
        let low = 0, high = n - 1
        
          // Perform the steps:
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return true;
        else if (target > arr[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return false;;
    
    }

function searchMatrix(matrix:number[][], target:number) {
   let n = matrix.length;
    let m = matrix[0].length;
    for (let i = 0; i < n; i++) {
        if (matrix[i][0] <= target && target <= matrix[i][m - 1]) {
            return binarySearch(matrix[i], target);
        }
    }
    return false;
}


// 3. optimazl approach

function  _searchMatrixOpti(matrix:number[][] , target:number)
{
    let n = matrix.length;
    let m = matrix[0].length;

    let low = 0 , high = (n*m)-1;
    while(  low<=high)
    {
        let mid = Math.floor((low+high)/2);
        let row  = Math.floor(mid/m);
        let col = mid%m;

        if(matrix[row][col] === target) return true;
        else if(matrix[row][col] < target) low = mid+1;
        else high = mid-1;
    }
    return false;
}

console.log(_searchMatrixOpti([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3));