// Coding Examples

// ?here are some coding examples to illustrate the use of stacks in TypeScript

// 1. Implementing a stack using an array:

class Stack {
  private data: any[] = [];
  private top: number = -1;

  public push(item: any): number {
   return  this.data.push(item);
  }

  public pop(): any {
    return this.data.pop();
  }

  public peek(): any {
    return this.data[this.data.length - 1];
  }

  public isEmpty(): boolean {
    return this.data.length === 0;
  }

  public size(): number {
    return this.data.length;
  }

  public clear(): void {
    this.data = [];
  }

  public isFULL(): boolean {
    return this.data.length === 10;
  }
  public print(): void {
    console.log(this.data.toString());
  }
}

const stack = new Stack();
stack.push(1);
console.log(stack.print); // 1

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
