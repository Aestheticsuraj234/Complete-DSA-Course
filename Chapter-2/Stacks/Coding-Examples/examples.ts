// 2. **Implementations:**
//!    - Implement a stack using an array in TypeScript.
//    - Implement a stack using a linked list in TypeScript.

// ? Implementing a stack using an array in typescript

class Stack<T> {
  private stack: T[] = [];
  private n: number = 10;

  //    1. PUSH
  push(item: T): void {
    this.stack.push(item);
  }
  //   2. POP

  pop() {
    return this.stack.pop();
  }

  //   3. PEEK

  peek() {
    return this.stack[this.stack.length - 1];
  }

  // 4. isEmpty

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  // 5. size

  size(): number {
    return this.stack.length;
  }

  //  6.  isFull

  isFull(): boolean {
    return this.stack.length === this.n;
  }
// 7. print
    printStack(stack:any): any {
        console.log(stack);
    }
}

const arrStack = new Stack<string>();

arrStack.push("A");
arrStack.push("B");
arrStack.push("C");
arrStack.push("D");
console.log(arrStack);

arrStack.pop();
arrStack.printStack(arrStack);

console.log(arrStack.peek());
console.log(arrStack.isEmpty());
console.log(arrStack.size());

// ? Implementing a stack using an LinkedList in typescript

class LinkedList<T> {
  data: T;
  next: LinkedList<T> | null;
  constructor(data:T){
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack<T>{
    private head: LinkedList<T> | null = null;
    private n: number = 10;

    // 1. PUSH

    push(item: T): void {
        if (this.head === null) {
            this.head = new LinkedList(item);
            return;
        }
        const newNode = new LinkedList(item);
        newNode.next = this.head;
        this.head = newNode;
    }



    // 2. POP

    pop(): T | null {
        if (this.head === null) {
            return null;
        }
        const item = this.head.data;
        this.head = this.head.next;
        return item;
    }

    // 3. PEEK

    peek(): T | null {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }

    // 4. isEmpty

    isEmpty(): boolean {
        return this.head === null;
    }

    // 5. size

    size(): number {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    // 6. isFull

    isFull(): boolean {
        return this.size() === this.n;
    }

    // 7. print

    printStack(): void {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}
