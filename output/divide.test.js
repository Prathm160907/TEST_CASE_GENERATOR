import { divide } from './divide';

describe('divide function', () => {
    it('should return the correct result for positive numbers', () => {
        expect(divide(10, 2)).toBe(5);
    });

    it('should return the correct result for negative numbers', () => {
        expect(divide(-10, 2)).toBe(-5);
    });

    it('should return the correct result for mixed numbers', () => {
        expect(divide(-10, -2)).toBe(5);
    });

    it('should return the correct result for decimal numbers', () => {
        // Note: Since the function returns an integer, the decimal part will be truncated
        expect(divide(10, 3)).toBe(3);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrowError('Cannot divide by zero');
    });

    it('should throw an error when the divisor is zero', () => {
        expect(() => divide(0, 0)).toThrowError('Cannot divide by zero');
    });

    it('should return zero when the dividend is zero', () => {
        expect(divide(0, 10)).toBe(0);
    });

    it('should return the correct result for large numbers', () => {
        expect(divide(1000000, 100)).toBe(10000);
    });

    it('should return the correct result for boundary values', () => {
        expect(divide(Integer.MAX_VALUE, 1)).toBe(2147483647);
        expect(divide(Integer.MIN_VALUE, 1)).toBe(-2147483648);
    });
});