import add from './add';

describe('add function', () => {
  it('should add two positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  it('should add two negative numbers', () => {
    expect(add(-10, -20)).toBe(-30);
  });

  it('should add a positive and a negative number', () => {
    expect(add(10, -20)).toBe(-10);
  });

  it('should add two decimal numbers', () => {
    expect(add(10.5, 20.7)).toBeCloseTo(31.2);
  });

  it('should add two integer strings', () => {
    expect(add('10', '20')).toBe('1020');
  });

  it('should add a number and a string', () => {
    expect(add(10, '20')).toBe('1020');
  });

  it('should add two empty strings', () => {
    expect(add('', '')).toBe('');
  });

  it('should add a number and null', () => {
    expect(add(10, null)).toBe('10null');
  });

  it('should add null and a number', () => {
    expect(add(null, 10)).toBe('null10');
  });

  it('should add two null values', () => {
    expect(add(null, null)).toBe('nullnull');
  });

  it('should add a number and undefined', () => {
    expect(add(10, undefined)).toBe('10undefined');
  });

  it('should add undefined and a number', () => {
    expect(add(undefined, 10)).toBe('undefined10');
  });

  it('should add two undefined values', () => {
    expect(add(undefined, undefined)).toBe('undefinedundefined');
  });

  it('should add NaN and a number', () => {
    expect(add(NaN, 10)).toBeNaN();
  });

  it('should add a number and NaN', () => {
    expect(add(10, NaN)).toBeNaN();
  });

  it('should add two NaN values', () => {
    expect(add(NaN, NaN)).toBeNaN();
  });

  it('should add a number and Infinity', () => {
    expect(add(10, Infinity)).toBe(Infinity);
  });

  it('should add Infinity and a number', () => {
    expect(add(Infinity, 10)).toBe(Infinity);
  });

  it('should add two Infinity values', () => {
    expect(add(Infinity, Infinity)).toBe(Infinity);
  });

  it('should add -Infinity and a number', () => {
    expect(add(-Infinity, 10)).toBe(-Infinity);
  });

  it('should add a number and -Infinity', () => {
    expect(add(10, -Infinity)).toBe(-Infinity);
  });

  it('should add two -Infinity values', () => {
    expect(add(-Infinity, -Infinity)).toBe(-Infinity);
  });
});