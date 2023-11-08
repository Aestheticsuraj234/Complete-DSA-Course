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
