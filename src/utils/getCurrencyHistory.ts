import axios from 'axios';
import { ExchangeRateData } from '@interfaces/interfaces';
import getDate30DaysAgo from './getDate30DaysAgo';

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

	const dateMonthAgo: string = getDate30DaysAgo();
	const apiKey: string = 'BA4616DA-5203-4825-8105-2045CB59E1B9';

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
