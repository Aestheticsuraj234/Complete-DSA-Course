// Length of Loop in LL

import { MyNode } from "../1d-linkedlist/intro_1";

// 1.  Brute force solution.

function findtheLengthOfLoop(head:MyNode<number> | null): number {
    let map = new Map();
    let temp = head;
    let timer = 1;
    while(temp!==null)
    {
        if(map.has(temp))
        {
            let value = map.get(temp);
            return (timer-value);
        }

        map[temp] = timer;
        timer++;
        temp = temp.next;
    }
    return 0;
}

// optimazed solution!

const countNodes = (slow:MyNode<number|null>) => {
    let count = 1;
    let fast = fast.next;

    while(slow !=fast)
    {
        count++;
        fast = fast.next;
    }
    return count;
}

function LengthOfLoop(head:MyNode<number|null>){
    let slow = head;
    let fast = head;
    while(fast !==null && fast.next !==null)
    {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast)
        {
            return countNodes(slow);
        }
    }
    return 0;

}