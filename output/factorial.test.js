import factorial from './factorial';

describe('factorial function', () => {
  it('should calculate the factorial of a positive number', () => {
    expect(factorial(5)).toBe(120);
  });

  it('should return 1 for input 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should calculate the factorial of a negative number', () => {
    expect(factorial(-5)).toBe(120);
  });

  it('should return 1 for input 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should handle large input', () => {
    expect(factorial(20)).toBe(2432902008176640000);
  });

  it('should throw an error for non-integer input', () => {
    expect(() => factorial(5.5)).toThrowError('Input must be an integer');
  });

  it('should throw an error for non-numeric input', () => {
    expect(() => factorial('five')).toThrowError('Input must be a number');
  });

  it('should throw an error for null input', () => {
    expect(() => factorial(null)).toThrowError('Input must be a number');
  });

  it('should throw an error for undefined input', () => {
    expect(() => factorial(undefined)).toThrowError('Input must be a number');
  });
});