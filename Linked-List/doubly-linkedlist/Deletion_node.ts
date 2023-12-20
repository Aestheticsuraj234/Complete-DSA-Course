import { ConvertArrayToDoublyLinkedList, DNode, print } from "./DLL";

// !. Delete the head of the doubly linked list
function DeleteTheHead(head: DNode | null) {
  //    *lets checkout for some edge cases

  // 1. it is not empty && it has only one node;
  // @ts-ignore
  if (head === null || head?.next === null) {
    return null;
  }

  let prev: DNode | null = head;
  head = head.next;
  head.back = null;
  prev.next = null;

  return head;
}

// *2. Delete the tail of the doubly linked list
function deleteTheTail(head: DNode | null) {
  if (head === null || head.next === null) {
    return null;
  }
  let tail = head;

  while (tail.next !== null) {
    tail = tail.next;
  }

  let prev: DNode | null = tail.back;
  prev!.next = null;
  tail.back = null;

  return head;
}

// *3. Delete the node at Kth position
function deleteTheKthNode(head: DNode | null, k: number) {
  if (head === null) {
    return null;
  }
  let cnt = 0;
  let temp: DNode | null = head;
  while (temp !== null) {
    cnt++;
    if (cnt === k) {
      break;
    }
    temp = temp.next;
  }

  let prev: DNode | null = temp!.back;
  let front: DNode | null = temp!.next;

  if(prev === null && front === null){
    return null;

  }
  else if (prev === null )
  {
    return DeleteTheHead(head);
  }
  else  if(front === null){
    return deleteTheTail(head);
  }
  else 
  {
    prev.next = front;
    front.back = prev;
    temp!.next = null;
    temp!.back = null;

  }

  return head;  

}

// *4. Delete the node 

function deleteNode(temp: DNode | null) {
    let prev: DNode | null = temp!.back;
    let front: DNode | null = temp!.next;

    if(front === null)
    {
        prev!.next = null;
        temp!.back = null;
    }

    prev!.next = front;
    front!.back = prev;

    temp!.next = null;
    temp!.back = null;
}

function main(): void {
  let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let head: DNode | null = ConvertArrayToDoublyLinkedList(arr);

deleteNode(head!.next!.next)

  print(head);
}

main();
