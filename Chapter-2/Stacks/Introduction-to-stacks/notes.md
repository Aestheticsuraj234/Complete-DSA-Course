# Introduction to Stacks in TypeScript

## what is stack?

Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last.

!["Stack-Image"](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726165552/Stack-Data-Structure.png)

There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.

## How Stacks Work

Stacks are implemented using arrays or linked lists. When an element is added to a stack, it is placed at the top of the stack. When an element is removed from a stack, the top element is removed.

!("")[https://www.youtube.com/watch?v=-n2rVJE4vto&t=1069s]

## Common Use Cases

- **Undo/redo functionality** :- Stacks are commonly used for implementing undo/redo functionality in software applications. For example, when you type text in a word processor, each keystroke is added to a stack. This allows you to undo or redo your typing actions.

- **Parsing expressions** :- Stacks are used to parse expressions, such as arithmetic expressions and boolean expressions. The stack is used to keep track of the order of operations.

- **Backtracking algorithms:** :- Stacks are used in backtracking algorithms, such as depth-first search and breadth-first search. The stack is used to keep track of the path that has been explored

1.  Implementing a stack using an array:

```typescript
class Stack {
    private data:any[] = [];

    // Some Basic Operations on Stack

     1. `Push`
    public push(item:any):void{
        this.data.push(item);
    }

     2. `Pop`
    public pop():any{
        return this.data.pop();
    }

     3. `seek`
     public seek():any{
        return this.data[this.data.length-1];
     }

     4. `isEmpty`
     public isEmpty():boolean{
        return this.data.length === 0;
     }
}

    // 2. Parsing an arithmetic expression:

function evaluateExpression(expression: string): number {
  const stack = new Stack();

  for (const token of expression.split(" ")) {
    if (isOperator(token)) {
      const operator = token;
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = evaluateOperation(operand1, operator, operand2);
      stack.push(result);
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack.pop();
}

function isOperator(token: string): boolean {
  return ["+", "-", "*", "/"].includes(token);
}

function evaluateOperation(
  operand1: number,
  operator: string,
  operand2: number
): number {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
}

// 3. Performing depth-first search:
function depthFirstSearch(
  graph: Map<string, string[]>,
  startNode: string
): string[] {
  const visited: Set<string> = new Set();
  const stack = new Stack();
  stack.push(startNode);

  const result: string[] = [];

  while (!stack.isEmpty()) {
    const node = stack.pop();

    if (visited.has(node)) {
      continue;
    }

    visited.add(node);
    result.push(node);

    for (const neighbor of graph.get(node) || []) {
      stack.push(neighbor);
    }
  }

  return result;
}



```

## Some key points related to stack

- It is called as stack because it behaves like a real-world stack, piles of books, etc.

- A Stack is an abstract data type with a pre-defined capacity, which means that it can store the elements of a limited size.

- It is a data structure that follows some order to insert and delete the elements, and that order can be LIFO or FILO.

## Working of Stack

Stack works on the LIFO pattern. As we can observe in the below figure there are five memory blocks in the stack; therefore, the size of the stack is 5.

Suppose we want to store the elements in a stack and let's assume that stack is empty. We have taken the stack of size 5 as shown below in which we are pushing the elements one by one until the stack becomes full.

!(Image)[https://static.javatpoint.com/ds/images/ds-stack.png]

Since our stack is full as the size of the stack is 5. In the above cases, we can observe that it goes from the top to the bottom when we were entering the new element in the stack. The stack gets filled up from the bottom to the top.

When we perform the delete operation on the stack, there is only one way for entry and exit as the other end is closed. It follows the LIFO pattern, which means that the value entered first will be removed last. In the above case, the value 5 is entered first, so it will be removed only after the deletion of all the other elements.

## Standard Stack Operations

The following are some common operations implemented on the stack:

- **push():** When we insert an element in a stack then the operation is known as a push. If the stack is full then the overflow condition occurs.

* **pop():** When we delete an element from the stack, the operation is known as a pop. If the stack is empty means that no element exists in the stack, this state is known as an underflow state.

* **isEmpty():** It determines whether the stack is empty or not.

* **isFull():** It determines whether the stack is full or not.'

* **peek()**: It returns the element at the given position.

* **count():** It returns the total number of elements available in a stack.

* **change():** It changes the element at the given position.

* **display():** It prints all the elements available in the stack.

### PUSH operation

**The steps involved in the PUSH operation is given below:**

* Before inserting an element in a stack, we check whether the stack is full.
* If we try to insert the element in a stack, and the stack is full, then the overflow condition occurs.
* When we initialize a stack, we set the value of top as -1 to check that the stack is empty.
* When the new element is pushed in a stack, first, the value of the top gets incremented, i.e., top=top+1, and the element will be placed at the new position of the top.
* The elements will be inserted until we reach the max size of the stack.

!("Image")[https://static.javatpoint.com/ds/images/ds-stack2.png]

