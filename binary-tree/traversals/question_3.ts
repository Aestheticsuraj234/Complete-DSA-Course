// * Preorder traversal of a binary tree🌳 ( recursive & iterative)

import { BinaryTREENode } from "./question_1";


// * Preorder traversal of a binary tree🌳 ( recursive ) (root , left , right)
function PreOrderTraversal<T>(root: BinaryTREENode<T> | null) {
    if (root == null) {
        return;
    }
    console.log(root.data);
    PreOrderTraversal(root.left);
    PreOrderTraversal(root.right);
}


// * Preorder traversal of a binary tree🌳 ( iterative ) (root , left , right)

export class Stack<T>{
    data: T[] = [];
    push(item: T) {
        this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
    isEmpty() {
        return this.data.length == 0;
    }
}

function PreOrderTraversalIterative<T>(root: BinaryTREENode<T> | null) {
  let preOrder = new Array<T>();


  if (root == null) {
    return preOrder;
  }

  let st = new Stack<BinaryTREENode<T>>();

  st.push(root);

  while(!st.isEmpty())
  {
    root = st.pop()!;
    preOrder.push(root.data);
    if(root.right !==null)
    {
        st.push(root.right);
    }
    if(root.left !==null)
    {
        st.push(root.left);
    }
  }
    return preOrder;
}




// output : [ 1, 2, 4, 5, 3, 6, 7 ]
let root = new BinaryTREENode(1);
root.left = new BinaryTREENode(2);
root.right = new BinaryTREENode(3);
root.left.left = new BinaryTREENode(4);
root.left.right = new BinaryTREENode(5);
root.right.left = new BinaryTREENode(6);
root.right.right = new BinaryTREENode(7);

console.log(PreOrderTraversalIterative(root));
