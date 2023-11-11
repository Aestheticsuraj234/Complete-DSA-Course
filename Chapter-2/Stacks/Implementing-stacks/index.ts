// ?A stack is a LIFO (Last In, First Out) data structure, which means that the last element added to the stack is the first one to be removed. Stacks are commonly used for implementing undo/redo functionality, parsing expressions, and backtracking algorithms.

// !- 2.1 Stack Data Structure💚
// !- 2.2 Operations on Stacks💚
// !- 2.3 Creating a Stack in TypeScript

// ?2.1 Stack Data Structure

class Stack<T> {
  private data: T[] = [];
  // ?2.2 Operations on Stacks

  // ?1. push(item) - Add an item to the top of the stack.
  public push(item: T): void {
    this.data.push(item);
  }

  // ?2. pop() - Remove the top item from the stack.
  public pop(): T | undefined {
    return this.data.pop();
  }

  //  ?3. PEEK() - Return the top of the stack.
  public peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  // ?4. isEmpty() - Return true if and only if the stack is empty.

  public isEmpty(): boolean {
    return this.data.length === 0;
  }

  // ?5. size() - Return the number of items in the stack.

  public size(): number {
    return this.data.length;
  }

  // ?6. clear() - Empty the stack.

  public clear(): void {
    this.data = [];
  }

  // ?7. toArray() - Return an array representation of the stack.

  public toArray(): T[] {
    return this.data.slice();
  }

  // ?8. toString() - Return a string representation of the stack.

  public toString(): string {
    return this.data.toString();
  }
}

// ?2.3 Creating a Stack in TypeScript

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.toArray()); // [ 1, 2, 3, 4, 5 ]

stack.pop();

console.log(stack.toArray()); // [ 1, 2, 3, 4 ]

console.log(stack.peek()); // 4

console.log(stack.isEmpty()); // false

console.log(stack.size()); // 4
