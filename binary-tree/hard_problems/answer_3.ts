class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Pair {
    node: TreeNode;
    num: number;

    constructor(_node: TreeNode, _num: number) {
        this.num = _num;
        this.node = _node;
    }
}

class Solution {
    static widthOfBinaryTree(root: TreeNode | null): number {
        if (root === null) return 0;

        let ans: number = 0;
        const q: Queue<Pair> = new Queue();

        q.enqueue(new Pair(root, 0));

        while (!q.isEmpty()) {
            const size: number = q.size();
            const mmin: number = q.peek()!.num; // to make the id starting from zero
            let first: number = 0,
                last: number = 0;

            for (let i: number = 0; i < size; i++) {
                const cur_id: number = q.peek()!.num - mmin;
                const node: TreeNode = q.peek()!.node;
                q.dequeue();

                if (i === 0) first = cur_id;
                if (i === size - 1) last = cur_id;

                if (node.left !== null) q.enqueue(new Pair(node.left, cur_id * 2 + 1));
                if (node.right !== null) q.enqueue(new Pair(node.right, cur_id * 2 + 2));
            }

            ans = Math.max(ans, last - first + 1);
        }

        return ans;
    }
}

// Simple Queue implementation for demonstration purposes
class Queue<T> {
    private data: T[] = [];

    enqueue(item: T): void {
        this.data.push(item);
    }

    dequeue(): T | undefined {
        return this.data.shift();
    }

    peek(): T | undefined {
        return this.data[0];
    }

    size(): number {
        return this.data.length;
    }

    isEmpty(): boolean {
        return this.data.length === 0;
    }
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(3);
root.left.left = new TreeNode(5);
root.left.left.left = new TreeNode(7);
root.right = new TreeNode(2);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(6);

const maxWidth = Solution.widthOfBinaryTree(root);
console.log(`The maximum width of the Binary Tree is ${maxWidth}`);
