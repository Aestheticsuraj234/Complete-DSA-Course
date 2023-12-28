// Find pairs with given sum in DLL

import { DNode } from "../doubly-linkedlist/DLL";


// *1. Brute Froce Solution

// !. Time Complexity: O(n^2)
// !. Space Complexity: O(1)

function FindPairOfGivenSumInDLL(head: DNode | null, sum: number) {
    if(head === null) return;
 let temp1 = head;
 let ds:number[][] = [];

 while(temp1!==null)
 {
    let temp2 = temp1.next;
    while(temp2!==null && temp1.data + temp2.data <=sum)
    {
        if(temp1.data + temp2.data === sum)
        {
            ds.push([temp1.data,temp2.data])
        }
        temp2 = temp2.next;
    }
    temp1 = temp1.next;
 }

}



// *2 Optimized Solution

// !. Time Complexity: O(n)
// !. Space Complexity: O(1)

function Findtail(head:DNode | null){
    let tail:DNode |null = head;
    while(tail!.next!==null)
    {
        tail = tail!.next;
    }
    return tail;
}


function  FindPairOfGivenSumInDLL2(head: DNode | null, sum: number) {
  let left = head;
  let right = Findtail(head);
  let Ds:number[][] = []
  while(left?.data < right?.data)
  {
    if(left!.data + right!.data === sum)
    {
        Ds.push([left!.data,right!.data]);   
        left = left!.next;
        right = right!.back;
    }
    else if(left!.data + right!.data < sum)
    {
        left = left!.next;
    }
    else
    {
        right = right!.back;
    }

  }
    return Ds;
}