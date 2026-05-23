import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {
  it('should return true for a palindrome string', () => {
    expect(isPalindrome('madam')).toBe(true);
  });

  it('should return true for a palindrome string with spaces', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });

  it('should return true for a single character string', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('should return false for a non-palindrome string', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('should return false for a null input', () => {
    expect(isPalindrome(null)).toBe(false);
  });

  it('should be case insensitive', () => {
    expect(isPalindrome('Madam')).toBe(true);
  });

  it('should ignore spaces and punctuation', () => {
    expect(isPalindrome('Able was I ere I saw Elba')).toBe(true);
  });

  it('should handle numbers', () => {
    expect(isPalindrome('12321')).toBe(true);
  });

  it('should handle special characters', () => {
    expect(isPalindrome('123$321')).toBe(false);
  });
});