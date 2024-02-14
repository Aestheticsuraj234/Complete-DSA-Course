const non_Mutable:number[] = [1, 2, 3, 4, 5];

// Brute Force

const largetElementBrute = (arr:number[])=>{
    arr.sort((a,b)=>a-b);
    let largest = arr.length-1;
    return  largest;
}



const largestElementOptimal = (arr:number[])=>
{
        let largest = arr[0];
        for(let i =0;i<arr.length;i++)
        {
            if(arr[i]>largest)
            largest = arr[i];

        }
        return largest;
}

// Time Complexity : O(n)
// Space Complexity : O(1)

console.log(largetElementBrute(non_Mutable));