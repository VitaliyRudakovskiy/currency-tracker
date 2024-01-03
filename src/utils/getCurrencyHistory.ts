import axios from 'axios';
import getDateMonthAgo from './getDateMonthAgo';
import { ExchangeRateData } from '@interfaces/interfaces';

const historyUSD = 'USD';
const historyEUR = 'EUR';

export default async function getCurrencyHistory(): Promise<
	[ExchangeRateData[], ExchangeRateData[]]
> {
	const cachedDataUSD = localStorage.getItem(historyUSD);
	const cachedDataEUR = localStorage.getItem(historyEUR);

	if (cachedDataUSD && cachedDataEUR) {
		return [JSON.parse(cachedDataUSD), JSON.parse(cachedDataEUR)];
	}

	const dateMonthAgo: string = getDateMonthAgo();
	const apiKey: string = '7128C165-578F-4FD6-89BD-138F4ECF707F';

	const fetchExchangeRate = async (
		currencyCode: string
	): Promise<ExchangeRateData[]> => {
		try {
			const response = await axios.get<ExchangeRateData[]>(
				`https://rest.coinapi.io/v1/exchangerate/${currencyCode}/RUB/history?period_id=1DAY&time_start=${dateMonthAgo}T00:00:00`,
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
		const [resultUSD, resultEUR] = await Promise.all([
			fetchExchangeRate('USD'),
			fetchExchangeRate('EUR'),
		]);

		localStorage.setItem(historyUSD, JSON.stringify(resultUSD));
		localStorage.setItem(historyEUR, JSON.stringify(resultEUR));

		return [resultUSD, resultEUR];
	} catch (error) {
		throw new Error(`Error making promises: ${error}`);
	}
}
