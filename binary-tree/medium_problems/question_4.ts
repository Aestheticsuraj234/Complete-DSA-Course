import { BinaryTREENode } from "../traversals/question_1";

export default function MaxSumPath(root: BinaryTREENode<number>) {
    let maxValue: number[] = new Array(1);
    maxValue[0] = Number.MIN_SAFE_INTEGER;
    maxPathDown(root, maxValue);
    return maxValue[0];
}

function maxPathDown(node: BinaryTREENode<number> | null, maxValue: number[]) {
    if (node === null) return 0;

    // Fix: Correct the order of operands in the Math.max function
    let left = Math.max(0, maxPathDown(node.left, maxValue));
    let right = Math.max(0, maxPathDown(node.right, maxValue));

    // Fix: Remove extra 'maxValue' in the calculation
    maxValue[0] = Math.max(maxValue[0], left + right + node.data);

    return Math.max(left, right) + node.data;
}
