// *Insertion Sort Algorithm
// *Problem Statement: Given an array of N integers, write a program to implement the Insertion sorting algorithm.

class InsertionSort{
    static insertion_sort(arr: number[], n: number): number[]{
        for(let i = 0 ; i<=n-1;i++)
        {
            let j = i;
            while(j>0 && arr[j-1] > arr[j])
            {
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                j--;
            }
        }
        return arr;
    }

}

console.log(InsertionSort.insertion_sort([13,46,24,52,20,9], 6));