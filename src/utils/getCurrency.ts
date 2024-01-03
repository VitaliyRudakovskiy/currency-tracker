import axios from 'axios';

const CACHE_KEY = 'currencyData';

export default async function getCurrency() {
	const cachedData = localStorage.getItem(CACHE_KEY);

	if (cachedData) {
		return JSON.parse(cachedData);
	}

	const apiKey = 'cur_live_oScF3PNeQWMdAQ9y6sCD3gipowU2tDM3SQEI9XIP';
	const apiUrl = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}`;

	try {
		const response = await axios.get(apiUrl);
		const currencyData = response.data;

		localStorage.setItem(CACHE_KEY, JSON.stringify(currencyData));

		return currencyData;
	} catch (error) {
		throw new Error(`Error occurred while fetching: ${error}`);
	}
}
