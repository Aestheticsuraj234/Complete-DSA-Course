// Assuming you have a BinaryTREENode class defined in "../traversals/question_1"
// Make sure to import or define the BinaryTREENode class accordingly.

class BinaryTREENode {
    value: number;
    left: BinaryTREENode | null;
    right: BinaryTREENode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function BuildTree(Preorder: number[], inOrder: number[]): BinaryTREENode | null {
    const inMap = new Map<number, number>();

    for (let i = 0; i < inOrder.length; i++) {
        inMap.set(inOrder[i], i);
    }

    const root = buildTreeRecursive(Preorder, 0, Preorder.length - 1, inOrder, 0, inOrder.length - 1, inMap);
    return root;
}

function buildTreeRecursive(
    Preorder: number[],
    preStart: number,
    preEnd: number,
    inOrder: number[],
    inStart: number,
    inEnd: number,
    inMap: Map<number, number>
): BinaryTREENode | null {
    if (preStart > preEnd || inStart > inEnd) {
        return null;
    }

    const root = new BinaryTREENode(Preorder[preStart]);

    const inRoot = inMap.get(root.value)!;

    const numsLeft = inRoot - inStart;

    root.left = buildTreeRecursive(Preorder, preStart + 1, preStart + numsLeft, inOrder, inStart, inRoot - 1, inMap);
    root.right = buildTreeRecursive(Preorder, preStart + numsLeft + 1, preEnd, inOrder, inRoot + 1, inEnd, inMap);

    return root;
}

// Example usage:
const preorder = [1, 2, 4, 5, 3, 6, 7];
const inorder = [4, 2, 5, 1, 6, 3, 7];

const root = BuildTree(preorder, inorder);
console.log(root); // Display the resulting binary tree structure
