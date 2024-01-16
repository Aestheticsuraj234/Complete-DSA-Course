// TreeNode structure
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Class to find nodes at a
// distance K from a target node
class Solution {
    
    // Helper function to mark
    // parents of nodes in the tree
    markParents(root: TreeNode | null, parent_track: Map<TreeNode, TreeNode>, target: TreeNode) {
        
        // Level Order Traversal
        // by taking a queue
        const queue: TreeNode[] = [];
        if (root) {
            queue.push(root);
        }
        
        // Iterate over all nodes
        while (queue.length > 0) {
            const current = queue.shift()!;
            
            // Assign parents to left child
            // and right child if they exist
            if (current.left) {
                parent_track.set(current.left, current);
                queue.push(current.left);
            }
            
            if (current.right) {
                parent_track.set(current.right, current);
                queue.push(current.right);
            }
        }
    }

    // Function to find nodes at a
    // distance K from the target node
    distanceK(root: TreeNode | null, target: TreeNode, k: number): number[] {
        if (!root) {
            return [];
        }
        
        // Map to mark the parents of all nodes
        const parent_track: Map<TreeNode, TreeNode> = new Map();
        // Mark parents of all nodes
        this.markParents(root, parent_track, target); 
        // Keeps track of visited nodes
        const visited: Map<TreeNode, boolean> = new Map(); 
        // Queue to perform level-order traversal
        const queue: TreeNode[] = []; 
        // Start traversal from the target node
        queue.push(target);
        // Tracks the current level
        // while traversing the tree
        let curr_level = 0; 
        
        // Continue traversal until
        // the queue is empty
        while (queue.length > 0) { 
            // Get the number of nodes
            // at the current level
            const size = queue.length; 
            if (curr_level++ === k) { 
                // Break if the current level
                // matches the required distance (k)
                break;
            }
            
            // Traverse the current level of the tree
            for (let i = 0; i < size; i++) {
                // Get the front node in the queue
                const current = queue.shift()!; 
                
                // Add unvisited left child to the queue
                if (current.left && !visited.get(current.left)) {
                    queue.push(current.left);
                    // Mark left child as visited
                    visited.set(current.left, true); 
                }
                
                // Add unvisited right child to the queue
                if (current.right && !visited.get(current.right)) {
                    queue.push(current.right);
                    // Mark right child as visited
                    visited.set(current.right, true);
                }
                
                // Add unvisited parent node to the queue
                if (parent_track.get(current) &&
                        !visited.get(parent_track.get(current)!)) {
                    queue.push(parent_track.get(current)!);
                    // Mark parent node as visited
                    visited.set(parent_track.get(current)!, true); 
                }
            }
        }
        
        // Stores nodes at distance k from the target
        const result: number[] = []; 
        while (queue.length > 0) { 
            // Extract nodes at distance k from the queue
            const current = queue.shift()!;
            // Store node values in the result vector
            result.push(current.val); 
        }

        // Return nodes at distance
        // K from the target
        return result; 
    }
}

// Main function
function main() {
    // Create a sample tree for testing
    const root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(8);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);

    const sol = new Solution();
    const target = root.left!;
    const k = 2;
    // Find nodes at distance 2 from the target node
    const result = sol.distanceK(root, target, k); 

    // Print the elements at distance
    // k from the target node
    console.log(`Nodes at distance ${k} from target node ${target.val}: ${result.join(' ')}`);
}

main();
