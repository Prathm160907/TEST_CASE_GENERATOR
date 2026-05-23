import { avr } from './avr';
import { describe, expect, test } from '@jest/globals';

describe('avr function tests', () => {
  describe('happy path', () => {
    test('should calculate average of two numbers', () => {
      expect(avr(10, 20)).toBe(15);
    });

    test('should handle decimal numbers', () => {
      expect(avr(10.5, 20.7)).toBe(15.6);
    });

    test('should handle negative numbers', () => {
      expect(avr(-10, -20)).toBe(-15);
    });
  });

  describe('edge cases', () => {
    test('should return NaN when both inputs are NaN', () => {
      expect(avr(NaN, NaN)).toBeNaN();
    });

    test('should return NaN when one input is NaN', () => {
      expect(avr(10, NaN)).toBeNaN();
    });

    test('should return Infinity when one input is Infinity', () => {
      expect(avr(10, Infinity)).toBe(Infinity);
    });

    test('should return -Infinity when one input is -Infinity', () => {
      expect(avr(10, -Infinity)).toBe(-Infinity);
    });
  });

  describe('null/empty inputs', () => {
    test('should throw an error when both inputs are null', () => {
      expect(() => avr(null, null)).toThrowError();
    });

    test('should throw an error when one input is null', () => {
      expect(() => avr(10, null)).toThrowError();
    });

    test('should throw an error when one input is undefined', () => {
      expect(() => avr(10, undefined)).toThrowError();
    });
  });

  describe('errors', () => {
    test('should throw an error when inputs are not numbers', () => {
      expect(() => avr('a', 'b')).toThrowError();
    });

    test('should throw an error when inputs are not numbers (object)', () => {
      expect(() => avr({ a: 10 }, { b: 20 })).toThrowError();
    });
  });

  describe('boundary values', () => {
    test('should calculate average of two large numbers', () => {
      expect(avr(1e308, 1e308)).toBe(1e308);
    });

    test('should calculate average of two small numbers', () => {
      expect(avr(1e-323, 1e-323)).toBe(1e-323);
    });
  });
});