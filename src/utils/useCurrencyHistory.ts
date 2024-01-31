import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHistoryEUR, setHistoryUSD } from '@store/reducers/currencySlice';

import getCurrencyHistory from './getCurrencyHistory';

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

type HistoryEntry = [string, string | number, string | number, string | number, string | number];

type CurrencyHistoryData = [...HistoryEntry][];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const useCurrencyHistory = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				delay(300);
				const [resultUSD, resultEUR]: [ExchangeRateData[], ExchangeRateData[]] = await getCurrencyHistory();

				const updatedHistoryUSD: CurrencyHistoryData = [
					['Day', '', '', '', ''],
					...resultUSD.map((item): HistoryEntry => [item.time_open.slice(0, 10), item.rate_low, item.rate_open, item.rate_close, item.rate_high]),
				];

				const updatedHistoryEUR: CurrencyHistoryData = [
					['Day', '', '', '', ''],
					...resultEUR.map((item): HistoryEntry => [item.time_open.slice(0, 10), item.rate_low, item.rate_open, item.rate_close, item.rate_high]),
				];

				dispatch(setHistoryUSD(updatedHistoryUSD));
				dispatch(setHistoryEUR(updatedHistoryEUR));
			} catch (error) {
				throw new Error(`Error in useCurrencyHistory hook: ${error}`);
			}
		};

		fetchData();
	}, [dispatch]);
};

export default useCurrencyHistory;
