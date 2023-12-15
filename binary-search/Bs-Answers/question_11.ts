function minimumTimeToPaintBoards(boardLengths: number[], painters: number): number {
    function countPaintersRequired(boardLengths: number[], timeLimit: number): number {
        let paintersRequired: number = 1;
        let currentBoardLength: number = 0;

        for (let i = 0; i < boardLengths.length; i++) {
            if (currentBoardLength + boardLengths[i] <= timeLimit) {
                currentBoardLength += boardLengths[i];
            } else {
                paintersRequired++;
                currentBoardLength = boardLengths[i];
            }
        }

        return paintersRequired;
    }

    function binarySearchForMinimumTime(boardLengths: number[], painters: number): number {
        let low: number = Math.max(...boardLengths);
        let high: number = boardLengths.reduce((a, b) => a + b, 0);

        while (low <= high) {
            let mid: number = Math.floor((low + high) / 2);
            let paintersRequired: number = countPaintersRequired(boardLengths, mid);

            if (paintersRequired > painters) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return low;
    }

    return binarySearchForMinimumTime(boardLengths, painters);
}

// Example usage:
const boardLengths: number[] = [5, 10, 15, 20];
const painters: number = 3;
const result: number = minimumTimeToPaintBoards(boardLengths, painters);
console.log(result); // Output: The minimum time required to paint all boards
