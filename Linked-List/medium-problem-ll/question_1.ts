// Find middle element in a Linked List
// Problem Statement: Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.

import { MyNode } from "../1d-linkedlist/intro_1";



// Solution #1

function middleNode(head: MyNode<number> | null): MyNode<number> | null {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    
    return slow;
}

// Time Complexity: O(n)
// Space Complexity: O(1)