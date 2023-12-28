export class DNode {
    constructor(public data: any, public next: DNode | null, public back: DNode | null) {
      this.data = data;
      this.next = next;
      this.back = back;
    }
  }
  
 export function ConvertArrayToDoublyLinkedList(arr: number[]) {
    if (arr.length === 0) {
      return null;
    }
  
    let head = new DNode(arr[0], null, null);
    let prev = head;
    for (let i: number = 1; i < arr.length; i++) {
      let temp = new DNode(arr[i], null, prev);
      prev.next = temp;
      prev = temp;
    }
  
    return head;
  }
  
  export function print(head: DNode | null) {
    while (head !== null) {
      console.log(head.data);
      head = head.next;
    }
  }
  
  function DeleteTheHead(head: DNode | null) {
    if (head === null || head.next === null) {
      return null;
    }
  
    let prev: DNode | null = head;
    head = head.next;
    if (head !== null) {
      head.back = null;
    }
    prev.next = null;
  
    return head;
  }
  
  function main(): void {
    let arr: number[] = [12, 5, 6, 8];
    let head: DNode | null = ConvertArrayToDoublyLinkedList(arr);
    console.log("before deletion");
    print(head);
    console.log("after deletion");
    head = DeleteTheHead(head);
    print(head);
  }
  
  main();
  