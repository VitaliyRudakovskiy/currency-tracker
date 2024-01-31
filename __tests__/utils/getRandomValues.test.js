import getRandomValue from '@utils/getRandomValue';

describe('getRandomValue', () => {
	it('returns an array of four numbers', () => {
		const result = getRandomValue();
		expect(result).toHaveLength(4);
		expect(result.every((value) => typeof value === 'number')).toBe(true);
	});

	it('ensures the smallest value is smaller than or equal to the random values', () => {
		const [smallestValue, randomValue1, randomValue2, largestValue] = getRandomValue();
		expect(smallestValue).toBeLessThanOrEqual(randomValue1);
		expect(smallestValue).toBeLessThanOrEqual(randomValue2);
		expect(randomValue1).toBeLessThanOrEqual(largestValue);
		expect(randomValue2).toBeLessThanOrEqual(largestValue);
	});

	it('returns an array', () => {
		const result = getRandomValue();
		expect(Array.isArray(result)).toBe(true);
	});
});
