// Remove duplicates in-place from sorted Array;

let arr:number[] = [1,1,2,3,3,4,5,5,6,7,7,8];

function RemoveDuplicatesBrute(arr:number[])
{
    let set = new Set<number>();
    for(let i=0;i<arr.length;i++)
    {
        set.add(arr[i]);
    }

    for(let i=0;i<arr.length;i++)
    {
        arr[i] = set.values().next().value;
        set.delete(arr[i]);
    }
}



// better solution with two pointers
function RemoveDuplicates(arr:number[]){
 let i = 0;
 for(let j=1;j<arr.length;j++)
 {
    if(arr[i] !== arr[j])
    {
        arr[i] = arr[j];
        i++;
    }
 }
   return i+1;
}

console.log(RemoveDuplicates(arr)); // 8