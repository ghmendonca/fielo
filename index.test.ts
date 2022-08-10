import { sumWeightedPath } from "."

describe('#sumWeightedPath', () => {
    it('should return 8 based on given input', () => {
        const result = sumWeightedPath(2, 2, [
            [1, 2],
            [3, 5]
        ]);

        expect(result).toBe(8)
    });

    it('should return 12 based on given input', () => {
        const result = sumWeightedPath(3, 3, [
            [1, 3, 3],
            [2, 1, 4],
            [0, 6, 4]
        ]);

        expect(result).toBe(12);
    });

    it('should return 16 based on given input', () => {
        const result = sumWeightedPath(4, 4, [
            [1, 3, 1, 5],
            [2, 2, 4, 1],
            [5, 0, 2, 3],
            [0, 6, 1, 2],
        ]);

        expect(result).toBe(16);
    });

    it('should return 83 based on given input', () => {
        const result = sumWeightedPath(4, 4, [
            [10, 33, 13, 15],
            [22, 21, 4, 1],
            [5, 0, 2, 3],
            [0, 6, 14, 2],
        ]);

        expect(result).toBe(83);
    });
})