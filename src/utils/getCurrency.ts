import { CURRENCIES_LOCAL_STORAGE } from '@constants/currencies';
import axios from 'axios';

export default async function getCurrency() {
	const cachedData = localStorage.getItem(CURRENCIES_LOCAL_STORAGE);

	if (cachedData) {
		return JSON.parse(cachedData);
	}

	const apiKey = process.env.CURRENCIES_API_KEY;
	const currenciesDomain = process.env.CURRENCIES_DOMAIN;

	const apiUrl = `${currenciesDomain}apikey=${apiKey}`;

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
