// *Calculate the Diameter of a Binary Tree

import { BinaryTREENode } from "../traversals/question_1";

// *Problem Statement: Find the Diameter of a Binary Tree. Diameter is the length of the longest path between any 2 nodes in the tree, and this path may or may not pass from the root.

class Solution_4 {
  // !Brute Force solution:-
  // *Time Complexity: O(n^2)
  // *Space Complexity: O(n)

  findHeight(root: BinaryTREENode<number> | null): number {
    if (root === null) return 0;
    let lh = this.findHeight(root.left);
    let rh = this.findHeight(root.right);
    return Math.max(lh, rh) + 1;
  }

  DiameterBrute(root: BinaryTREENode<number> | null): number {
    if (root === null) return 0; // Base case

    let lh = this.findHeight(root.left);
    let rh = this.findHeight(root.right);

    let currentDiameter = lh + rh;

    // Update global maximum diameter if needed

    let leftDiameter = this.DiameterBrute(root.left);
    let rightDiameter = this.DiameterBrute(root.right);

    return Math.max(currentDiameter, leftDiameter, rightDiameter);
  }

  //   ?Optimized Solution:-

  //   *Time Complexity: O(n)

  //   *Space Complexity: O(n)

  diameterOfBinaryTree(root: BinaryTREENode<number> | null): number {
    const diameter: number[] = [0];
    this.height(root, diameter);
    return diameter[0];
}


height(node: BinaryTREENode<number> | null, diameter: number[]): number {
    if (node === null) {
        return 0;
    }

    const lh = this.height(node.left, diameter);
    const rh = this.height(node.right, diameter);

    diameter[0] = Math.max(diameter[0], lh + rh);

    return 1 + Math.max(lh, rh);
}

}
