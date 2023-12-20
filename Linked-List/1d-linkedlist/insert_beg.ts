import { MyNode } from "./intro_1";

function insertthenode(head: MyNode<number>, data: number) {


  if(head === null)
  {
    head = new MyNode(data);
    return head;
  }

  let newNode = new MyNode(data);
  newNode.next = head;
  head = newNode;
  return head;

}

let head = new MyNode(10);
head = insertthenode(head, 20);

console.log(head.data);