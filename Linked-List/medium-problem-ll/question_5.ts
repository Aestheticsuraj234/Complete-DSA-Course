// Problem Statement: Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
import { MyNode } from "../1d-linkedlist/intro_1";
// 1.  Brute force solution.

function FindStartingPointInLoop(head:MyNode<number> | null): MyNode<number> | null {
//    initialize a hashmap
    const Hashmap = new Map();
    let temp = head;
    while(temp !=null)
    {
        if(Hashmap.has(temp))
        {
            return temp;
        }
        Hashmap.set(temp,1);
        temp = temp.next;
    }
    return null;
}



// 2. Optimized Solution -- Here

function OptimizedFindStartingInLoop(head:any) {
    let slow = head;
    let fast = head;

    while(fast !==null && fast.next !==null)
    {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            slow = head;
            while(slow !=fast)
            {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}