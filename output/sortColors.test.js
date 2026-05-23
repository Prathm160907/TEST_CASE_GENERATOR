import { sortColors } from './sortColors';

describe('sortColors', () => {
    it('should sort colors', () => {
        const nums = [2, 0, 2, 1, 1, 0];
        const result = sortColors(nums);
        expect(result).toEqual([0, 0, 1, 1, 2, 2]);
    });

    it('should handle empty array', () => {
        const nums = [];
        const result = sortColors(nums);
        expect(result).toEqual([]);
    });

    it('should handle null array', () => {
        const nums = null;
        expect(() => sortColors(nums)).toThrow();
    });

    it('should handle single element array', () => {
        const nums = [0];
        const result = sortColors(nums);
        expect(result).toEqual([0]);
    });

    it('should handle array with single color', () => {
        const nums = [0, 0, 0];
        const result = sortColors(nums);
        expect(result).toEqual([0, 0, 0]);
    });

    it('should handle array with two colors', () => {
        const nums = [0, 1, 1, 0];
        const result = sortColors(nums);
        expect(result).toEqual([0, 0, 1, 1]);
    });

    it('should handle array with three colors', () => {
        const nums = [2, 0, 2, 1, 1, 0];
        const result = sortColors(nums);
        expect(result).toEqual([0, 0, 1, 1, 2, 2]);
    });

    it('should handle large array', () => {
        const nums = Array(1000).fill(0).map((_, i) => i % 3);
        const result = sortColors(nums);
        for (let i = 0; i < 1000; i++) {
            if (i < 333) {
                expect(result[i]).toBe(0);
            } else if (i < 666) {
                expect(result[i]).toBe(1);
            } else {
                expect(result[i]).toBe(2);
            }
        }
    });

    it('should handle array with duplicate colors', () => {
        const nums = [0, 0, 1, 1, 2, 2];
        const result = sortColors(nums);
        expect(result).toEqual([0, 0, 1, 1, 2, 2]);
    });

    it('should handle array with colors in wrong order', () => {
        const nums = [2, 1, 0];
        const result = sortColors(nums);
        expect(result).toEqual([0, 1, 2]);
    });
});