// Inorder Traversal of Binary Tree
// Problem Statement: Given a Binary Tree. Find and print the inorder traversal of Binary Tree.

import { BinaryTREENode } from "./question_1";
import { Stack } from "./question_3";

// Inorder traversal of a binary tree🌳 ( recursive ) (left , root , right)

class Solution {
    static InOrderIterative<T>(root: BinaryTREENode<T> | null) {
     let inOrder = new Array<T>();
     let stack = new Stack<BinaryTREENode<T>>();
     let node = root;

      while(true){
        if(node !== null){
            stack.push(node);
            node = node.left;
        }
        else 
        {
            if(stack.isEmpty()){
                break;
            }
            node = stack.pop()!;
            inOrder.push(node.data);
            node = node.right;
        }

      }
        return inOrder;

    }

    static InOrderRecursive<T>(root: BinaryTREENode<T> | null) {
        if(root == null){
            return;
        }
        this.InOrderRecursive(root.left);
        console.log(root.data);
        this.InOrderRecursive(root.right);
    }

}

let root = new BinaryTREENode(1);
root.left = new BinaryTREENode(2);
root.right = new BinaryTREENode(3);
root.left.left = new BinaryTREENode(4);
root.left.right = new BinaryTREENode(5);
root.right.left = new BinaryTREENode(6);
root.right.right = new BinaryTREENode(7);

console.log(Solution.InOrderIterative(root));

// output : [ 4, 2, 5, 1, 6, 3, 7 ]