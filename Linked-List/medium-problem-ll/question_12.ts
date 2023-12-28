// Find intersection of Two Linked Lists
// Problem Statement: Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.


// Best soltuion: O() time | O(1) space

// Time Complexity: O(n + m) where n and m are the lengths of the two linked lists

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let p1 = headA;
    let p2 = headB;
    
    while (p1 !== p2) {
        p1 = p1 === null ? headB : p1.next;
        p2 = p2 === null ? headA : p2.next;
    }
    
    return p1;
}


//  let name = "aditya";
//  let age = 15;

