import generateRandomHistory from '@utils/generateRandomHistory';

describe('generateRandomHistory', () => {
	it('should return an array with the correct structure and intervals', () => {
		const result = generateRandomHistory();
		expect(Array.isArray(result)).toBe(true);
		expect(result.length).toBeGreaterThan(0);

		result.forEach((item, itemIndex) => {
			expect(Array.isArray(item)).toBe(true);
			if (itemIndex > 0) {
				item.forEach((value, index) => {
					if (index === 0) expect(typeof value).toBe('string');
					else expect(typeof value).toBe('number');
				});
			}
		});
	});

	it('should return an array with 32 entries (31 days in a month + header)', () => {
		const result = generateRandomHistory();
		expect(result.length).toBe(32);
	});

	it('should have headers in the correct format', () => {
		const result = generateRandomHistory();
		const headers = result[0];
		expect(headers).toEqual(['Day', '', '', '', '']);
	});
});
