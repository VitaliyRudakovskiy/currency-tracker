import axios from 'axios';
import { CURRENCIES_LOCAL_STORAGE } from '@constants/currencies';

export default async function getCurrency() {
	const cachedData = localStorage.getItem(CURRENCIES_LOCAL_STORAGE);

	if (cachedData) {
		return JSON.parse(cachedData);
	}

	const apiKey = 'cur_live_DhMeSyxp7aaMNudHiWWOHkj6fTtg0EuRhR99KRPs';
	const apiUrl = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}`;

	try {
		const response = await axios.get(apiUrl);
		const currencyData = response.data;

		localStorage.setItem(
			CURRENCIES_LOCAL_STORAGE,
			JSON.stringify(currencyData)
		);

		return currencyData;
	} catch (error) {
		throw new Error(`Error occurred while fetching: ${error}`);
	}
}
