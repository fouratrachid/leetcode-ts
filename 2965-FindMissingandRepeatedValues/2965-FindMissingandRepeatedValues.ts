function findMissingAndRepeatedValues(grid: number[][]): number[] {
const n = grid.length;
    const size = n * n;
    const frequency = new Array(size + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            frequency[grid[i][j]]++;
        }
    }

    let missing = -1, duplicate = -1;
    for (let i = 1; i <= size; i++) {
        if (frequency[i] === 0) missing = i;
        if (frequency[i] === 2) duplicate = i;
    }

    return [duplicate, missing];
};