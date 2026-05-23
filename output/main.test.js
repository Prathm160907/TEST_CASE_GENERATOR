import { buyAsellStock } from './script';

describe('buyAsellStock', () => {
    it('should return the max profit for a given array of prices', () => {
        const prices = [7, 1, 5, 3, 6, 4];
        expect(buyAsellStock(prices)).toBe(5);
    });

    it('should return 0 when the array is empty', () => {
        const prices = [];
        expect(buyAsellStock(prices)).toBe(0);
    });

    it('should return 0 when the array has one element', () => {
        const prices = [10];
        expect(buyAsellStock(prices)).toBe(0);
    });

    it('should return 0 when the array has two elements and the second is smaller than the first', () => {
        const prices = [10, 5];
        expect(buyAsellStock(prices)).toBe(0);
    });

    it('should return the difference between the two elements when the array has two elements and the second is larger than the first', () => {
        const prices = [5, 10];
        expect(buyAsellStock(prices)).toBe(5);
    });

    it('should return the max profit when there are multiple local maxima', () => {
        const prices = [7, 1, 5, 3, 6, 4, 8, 2, 10];
        expect(buyAsellStock(prices)).toBe(9);
    });

    it('should return 0 when all elements in the array are equal', () => {
        const prices = [5, 5, 5, 5];
        expect(buyAsellStock(prices)).toBe(0);
    });

    it('should return 0 when the input array is null', () => {
        const prices = null;
        expect(buyAsellStock(prices)).toBe(0);
    });
});