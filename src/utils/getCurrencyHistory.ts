import axios from 'axios';

import getDate30DaysAgo from './getDate30DaysAgo';

const historyUSD = 'USD';
const historyEUR = 'EUR';

interface ExchangeRateData {
	rate_close: number;
	rate_high: number;
	rate_low: number;
	rate_open: number;
	time_close: string;
	time_open: string;
	time_period_end: string;
	time_period_start: string;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function getCurrencyHistory(): Promise<
	[ExchangeRateData[], ExchangeRateData[]]
> {
	const cachedDataUSD = localStorage.getItem(historyUSD);
	const cachedDataEUR = localStorage.getItem(historyEUR);

	if (cachedDataUSD && cachedDataEUR) {
		return [JSON.parse(cachedDataUSD), JSON.parse(cachedDataEUR)];
	}

	const dateMonthAgo: string = getDate30DaysAgo();
	const apiKey = process.env.HISTORY_API_KEY;
	const historyDomain = process.env.HISTORY_DOMAIN;

	const fetchExchangeRate = async (
		currencyCode: string
	): Promise<ExchangeRateData[]> => {
		try {
			const response = await axios.get<ExchangeRateData[]>(
				`${historyDomain}${currencyCode}/RUB/history?period_id=1DAY&time_start=${dateMonthAgo}T00:00:00`,
				{
					headers: {
						'X-CoinAPI-Key': apiKey,
					},
				}
			);
			return response.data;
		} catch (error) {
			throw new Error(
				`Error fetching ${currencyCode} to RUB Exchange Rate Data: ${error}`
			);
		}
	};

	try {
		await delay(500);
		const resultUSD = await Promise.resolve(fetchExchangeRate('USD'));
		await delay(500);
		const resultEUR = await Promise.resolve(fetchExchangeRate('EUR'));

		localStorage.setItem(historyUSD, JSON.stringify(resultUSD));
		localStorage.setItem(historyEUR, JSON.stringify(resultEUR));

		return [resultUSD, resultEUR];
	} catch (error) {
		throw new Error(`Error making promises: ${error}`);
	}
}
