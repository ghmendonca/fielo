export const sumWeightedPath = (n: number, m: number, matrix: number[][]): number => {
    let results: Record<string, number> = {};
    let final = 0;

    if (n === 1 && m === 1) {
        return matrix[0][0];
    }

    const f = (i: number, j: number): number => {
        if (results[`${i}-${j}`]) {
            return matrix[i][j] + results[`${i}-${j}`];
        }

        if (j === m - 1 && i < n) {
            return matrix[i][j];
        }

        const value = matrix[i][j];

        const result = Math.max(i > 0 ? f(i - 1, j + 1) : 0, f(i, j + 1), i < n - 1 ? f(i + 1, j + 1) : 0);

        results[`${i}-${j}`] = result;

        return result + value;
    }

    for (let i = 0; i < matrix.length; i++) {
        const value = f(i, 0);
        if (value > final) {
            final = value;
        }
    }

    return final;
}
