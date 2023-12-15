// Allocate Minimum Number of Pages
// Problem Statement: Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book. There are a ‘m’ number of students, and the task is to allocate all the books to the students.
// Allocate books in such a way that:

// *Each student gets at least one book.
// *Each book should be allocated to only one student.
// *Book allocation should be in a contiguous manner.
// *You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum. If the allocation of books is not possible. return -1


// ! Utils Function to Maximum Number of Pages

function _maxPage(arr:number[] , pages:number)
{
    let student = 1;
    let PagesStudent = 0;
    for(let i = 0 ; i<arr.length ; i++)
    {
       if(PagesStudent + arr[i] <= pages)
       {
        PagesStudent += arr[i];
       }
       else 
       {
           student++;
           PagesStudent = arr[i];
       }
    }
    return student;
}

// 1. Brute Force Approach;

function _allocateBooksBrute(arr:number[] , m:number)
{
    let low = Math.max(...arr);
    let high = arr.reduce((a,b)=>a+b,0);
    for(let i = low ; i<=high ; i++)
    {
       let countStd = _maxPage(arr,i);
       if(countStd === m)
       {
              return i;
       }

    }
    return -1;
}

console.log("Mmaximum number of pages assigned to a student is minimum",_allocateBooksBrute([12, 34, 67, 90], 2));


// 2. Optimized Approach


function _allocateBooksOpti(arr:number[],m:number)
{
    let low = Math.max(...arr);
    let high = arr.reduce((a,b)=>a+b,0);
   
    while(low<=high)
    {
        let mid = Math.floor((low+high)/2);

       let NumberOfStudent = _maxPage(arr,mid);

       if(NumberOfStudent > m)
       {
        low = mid+1;
       }
       else 
         {
              high = mid-1;
         }
    }
    return low;
}

console.log("Mmaximum number of pages assigned to a student is minimum",_allocateBooksOpti([12, 34, 67, 90], 2));