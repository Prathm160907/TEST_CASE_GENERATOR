```javascript
const trap = (height) => {
    if (!height || height.length < 3) return 0;

    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let totalWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }

    return totalWater;
};

describe('trap function', () => {
    it('should return 0 for null or empty input', () => {
        expect(trap(null)).toBe(0);
        expect(trap([])).toBe(0);
    });

    it('should return 0 for input with less than 3 elements', () => {
        expect(trap([1])).toBe(0);
        expect(trap([1, 2])).toBe(0);
    });

    it('should return correct result for typical input', () => {
        expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
        expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
    });

    it('should return correct result for input with same height', () => {
        expect(trap([1, 1, 1, 1, 1])).toBe(0);
    });

    it('should return correct result for input with increasing height', () => {
        expect(trap([1, 2, 3, 4, 5])).toBe(0);
    });

    it('should return correct result for input with decreasing height', () => {
        expect(trap([5, 4, 3, 2, 1])).toBe(0);
    });

    it('should return correct result for input with large numbers', () => {
        expect(trap([100, 200, 100, 300, 200, 100, 400, 300, 200, 100, 500, 400])).toBe(900);
    });
});
```