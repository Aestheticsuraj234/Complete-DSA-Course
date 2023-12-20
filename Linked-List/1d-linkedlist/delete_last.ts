// Delete Last Node of Linked List
// Problem Statement: Given a linked list, delete the tail of the linked list and print the updated linked list.
import { MyNode } from "./intro_1";


function deleteTail(head: MyNode<number>)
{
    // @ts-ignore
if(head===null && head.next ===null ){
    return null;
}

   // Create a temporary pointer for traversal

   let temp = head;
   while(temp.next?.next === null)
   {
    temp = temp.next; 
   }

   temp.next = null;

   return head;

}

 // Initialize an array with integer values
 const arr = [2, 5, 8, 7];

 // Create the linked list with nodes initialized with array values
 let head = new MyNode(arr[0]);
 head.next = new MyNode(arr[1]);
 head.next.next = new MyNode(arr[2]);
 head.next.next.next = new MyNode(arr[3]);

let deleted = deleteTail(head);

console.log(deleted)
