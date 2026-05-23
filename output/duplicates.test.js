import { duplicates } from './duplicates';

describe('duplicates function', () => {
    it('should return an empty array when input array has no duplicates', () => {
        const numbers = [1, 2, 3, 4, 5];
        expect(duplicates(numbers)).toEqual([]);
    });

    it('should return an array with duplicates', () => {
        const numbers = [1, 2, 2, 3, 3, 3, 4, 5];
        expect(duplicates(numbers)).toEqual([2, 2, 3, 3, 3]);
    });

    it('should return an empty array when input array is empty', () => {
        const numbers = [];
        expect(duplicates(numbers)).toEqual([]);
    });

    it('should return an array with all elements when all elements are the same', () => {
        const numbers = [1, 1, 1, 1, 1];
        expect(duplicates(numbers)).toEqual([1, 1, 1, 1]);
    });

    it('should return an array with duplicates when input array has negative numbers', () => {
        const numbers = [-1, -1, 0, 0, 1, 1];
        expect(duplicates(numbers)).toEqual([-1, 0, 0, 1, 1]);
    });

    it('should return an array with duplicates when input array has decimal numbers', () => {
        const numbers = [1.1, 1.1, 2.2, 2.2, 2.2];
        expect(duplicates(numbers)).toEqual([1.1, 2.2, 2.2, 2.2]);
    });

    it('should throw an error when input is not an array', () => {
        const numbers = 'hello';
        expect(() => duplicates(numbers)).toThrow();
    });

    it('should throw an error when input array contains non-numeric values', () => {
        const numbers = [1, 'a', 2, 'b'];
        expect(() => duplicates(numbers)).toThrow();
    });
});