import { DNode, ConvertArrayToDoublyLinkedList, print } from "./DLL";

// *1. Insert at the head of the doubly linked list
function InsertAtTheHead(head: DNode | null, data: number) {
  let newHead = new DNode(data, head, null);
  if (head !== null) {
    head.back = newHead;
  }

  return newHead;
}

// *2. Insert before the tail of the doubly linked list
function InsertBeforeTheTail(head: DNode | null, data: number) {
  if (head === null) {
    return InsertAtTheHead(head, data);
  }

  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }

  let prev: DNode | null = temp.back;
  let front: DNode | null = temp.next;

  let newNode = new DNode(data, prev, front);

  if (prev !== null) {
    prev.next = newNode;
  }

  if (front !== null) {
    // @ts-ignore
    front.back = newNode;
  }

  return head;
}

//   *3. Insert before the Kth position;

function InsertBeforeTheKthPosition(
  head: DNode | null,
  data: number,
  k: number
) {
  if (k === 1) {
    return InsertAtTheHead(head, data);
  }

  let temp = head;
  let cnt = 0;
  while (temp !== null) {
    cnt++;
    if (cnt === k) {
      break;
    }
    temp = temp.next;
  }

  let prev: DNode | null = temp!.back;

  let newNode = new DNode(data, temp, prev);
  if (prev !== null) {
    prev.next = newNode;
  }
  if (temp !== null) {
    temp.back = newNode;
  }

  return head;
}

// *4. Insert node before the given node
function InsertBeforeTheGivenNode(
  head: DNode | null,
  data: number,
  givenNode: DNode | null
) {
  let prev = givenNode!.back;
  let newNode = new DNode(data, givenNode, prev);
  if (prev !== null) {
    prev.next = newNode;
  }
  if (givenNode !== null) {
    givenNode.back = newNode;
  }
}

function SIGMA() {
  let arr = [1, 2, 3, 4, 5];
  let head = ConvertArrayToDoublyLinkedList(arr);

  console.log("Original doubly linked list:");
  print(head);

  // Insert before the tail
  head = InsertBeforeTheTail(head, 20);
  console.log("After Inserting before the tail:");
  print(head);

  // Insert before the Kth position
  head = InsertBeforeTheKthPosition(head, 30, 3);
  console.log("After Inserting before the Kth position:");

  print(head);

  // Insert before the given node
  let givenNode = head!.next!.next!.next!.next!.next;
  InsertBeforeTheGivenNode(head, 40, givenNode);
  console.log("After Inserting before the given node:");
  print(head);
}

SIGMA();
