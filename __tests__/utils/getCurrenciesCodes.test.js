import getCurrenciesCodes from '@utils/getCurrenciesCodes';
import { CURRENCIES_LOCAL_STORAGE } from '@constants/currencies';

describe('getCurrenciesCodes', () => {
	afterEach(() => {
		localStorage.removeItem(CURRENCIES_LOCAL_STORAGE);
	});

	it('should return empty array if localStorage is empty', () => {
		const result = getCurrenciesCodes();
		expect(result).toEqual([]);
	});

	it('should return currencies codes if data in localStorage is valid', () => {
		const validData = {
			meta: {},
			data: {
				USD: { code: 'USD', value: 1 },
				EUR: { code: 'EUR', value: 1.231 },
			},
		};
		localStorage.setItem(CURRENCIES_LOCAL_STORAGE, JSON.stringify(validData));
		const result = getCurrenciesCodes();
		expect(result).toEqual(['USD', 'EUR']);
	});
});
