// Delete All Occurrences of a Given Key in a Doubly Linked List
import {
  DNode,
  ConvertArrayToDoublyLinkedList,
  print,
} from "../../Linked-List/doubly-linkedlist/DLL";

function DeleteAllOccurrencesOfAGivenKey(head: DNode | null, key: number) {
  let temp = head;
  while (temp !== null) {
    if (temp.data === key) {
      if (temp === head) {
        head = temp.next;
      }

      let NextNode = temp.next;
      let PrevNode = temp.back;

      if (NextNode) return (NextNode.back = PrevNode);
      if (PrevNode) return (PrevNode.next = NextNode);

      temp = NextNode;
    } else {
      temp = temp.next;
    }
  }
  return head;
}

let list = ConvertArrayToDoublyLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1]);
let key = 1;
console.log("Original doubly linked list:");
print(list);
console.log("After deleting all occurrences of", key);
list = DeleteAllOccurrencesOfAGivenKey(list, key);
print(list);
