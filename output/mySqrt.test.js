import mySqrt from './mySqrt';

describe('mySqrt function', () => {
    it('should return the square root of a perfect square', () => {
        expect(mySqrt(4)).toBe(2);
        expect(mySqrt(9)).toBe(3);
        expect(mySqrt(16)).toBe(4);
    });

    it('should return the integer part of the square root of an imperfect square', () => {
        expect(mySqrt(5)).toBe(2);
        expect(mySqrt(10)).toBe(3);
        expect(mySqrt(20)).toBe(4);
    });

    it('should return 0 for input 0', () => {
        expect(mySqrt(0)).toBe(0);
    });

    it('should return 0 for input negative numbers', () => {
        expect(mySqrt(-1)).toBe(0);
        expect(mySqrt(-4)).toBe(0);
        expect(mySqrt(-9)).toBe(0);
    });

    it('should return the correct result for large inputs', () => {
        expect(mySqrt(2147483647)).toBe(46340);
        expect(mySqrt(2147483646)).toBe(46340);
    });

    it('should throw an error for non-integer inputs', () => {
        expect(() => mySqrt(4.5)).toThrowError();
        expect(() => mySqrt('a')).toThrowError();
    });

    it('should return the correct result for the maximum possible input', () => {
        expect(mySqrt(2147483647)).toBe(46340);
    });

    it('should return the correct result for the minimum possible input', () => {
        expect(mySqrt(-2147483648)).toBe(0);
    });

    it('should handle null and undefined inputs', () => {
        expect(() => mySqrt(null)).toThrowError();
        expect(() => mySqrt(undefined)).toThrowError();
    });
});