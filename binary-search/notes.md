Binary search is an efficient algorithm used to locate a specific value within a sorted collection, such as an array. Here are quick notes on binary search:

1. **Input Requirement:**
   - Requires a sorted collection (e.g., an array).
   - Suitable for large datasets.

2. **Divide and Conquer:**
   - Begins by comparing the target value to the middle element of the collection.
   - If the target is equal to the middle element, the search is successful.
   - If the target is less than the middle element, the search continues in the lower half.
   - If the target is greater, the search continues in the upper half.

3. **Process:**
   - Repeat the process on the selected half until the target is found or the search space is empty.

4. **Algorithm Steps:**
   - Compare the target value to the middle element.
   - If equal, the search is successful.
   - If less, repeat the search on the lower half.
   - If greater, repeat the search on the upper half.
   - Continue until the target is found or the search space is empty.

5. **Efficiency:**
   - Time complexity: O(log n), where n is the number of elements in the collection.
   - Significantly faster than linear search for large datasets.

6. **Requirements:**
   - The collection must be sorted for binary search to work correctly.

7. **Implementation:**
   - Can be implemented iteratively or recursively.

8. **Example:**
   - Suppose you have a sorted array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
   - Searching for 7:
     - Compare with the middle element (5).
     - Since 7 > 5, focus on the upper half [6, 7, 8, 9, 10].
     - Repeat until the target (7) is found.

Binary search is a fundamental algorithm in computer science, widely used for efficient searching in various applications.