function secondLargest(arr:number[],n:number)
{
    let largest = arr[0]
    let secondLargest = -1

    for(let i=1;i<n;i++)
    {
        if(arr[i]>largest)
        {
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i]<largest && arr[i]>secondLargest)
        {
            secondLargest = arr[i];
        
        }
    }

    return secondLargest;
}

function secondSmallest(arr:number[],n:number)
{
    let smallest = arr[0]
    let secondSmallest = Number.MAX_VALUE;

    for(let i=1;i<n;i++)
    {
        if(arr[i]<smallest)
        {
            secondSmallest = smallest;
            smallest = arr[i];
        
        }
        else if(arr[i]>smallest && arr[i]<secondSmallest)
        {
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}


function getSecondLargestOrderElement(n:number, arr:number[]){
  let second_Largest = secondLargest(arr,n);
  let second_Smallest = secondSmallest(arr,n);



  return {second_Largest , second_Smallest};
}


let arr = [12, 35, 1, 10, 34, 1];
let n = arr.length;
console.log(getSecondLargestOrderElement(n,arr));