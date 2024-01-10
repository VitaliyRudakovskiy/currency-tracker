import axios from 'axios';
import getCurrency from '@utils/getCurrency';
import { CURRENCIES_LOCAL_STORAGE } from '@constants/currencies';

jest.mock('axios');

describe('getCurrency', () => {
	it('fetches currency data from API or gets cached data', async () => {
		const mockCurrencyData = { meta: {}, data: {} };
		axios.get.mockResolvedValue({ data: mockCurrencyData });

		const result = await getCurrency();

		expect(result).toBeInstanceOf(Object);
		expect(result).toHaveProperty('meta');
		expect(result).toHaveProperty('data');

		if (!localStorage.getItem(CURRENCIES_LOCAL_STORAGE)) {
			expect(axios.get).toHaveBeenCalledWith(
				`https://api.currencyapi.com/v3/latest?apikey=cur_live_oScF3PNeQWMdAQ9y6sCD3gipowU2tDM3SQEI9XIP`
			);
		}
	});
});
