import getDate30DaysAgo from '@utils/getDate30DaysAgo';

describe('getDate30DaysAgo', () => {
	it('returns a string in the format "YYYY-MM-DD"', () => {
		const result = getDate30DaysAgo();
		const regexPattern = /^\d{4}-\d{2}-\d{2}$/;
		expect(result).toMatch(regexPattern);
	});

	it('returns a date 30 days ago', () => {
		const currentDate = new Date();
		const thirtyDaysAgo = new Date();
		thirtyDaysAgo.setDate(currentDate.getDate() - 30);
		const formattedThirtyDaysAgo = thirtyDaysAgo.toISOString().split('T')[0];
		const result = getDate30DaysAgo();
		expect(result).toBe(formattedThirtyDaysAgo);
	});
});
