import {
	CurrencyHistoryData,
	ExchangeRateData,
	HistoryEntry,
} from '@interfaces/interfaces';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getCurrencyHistory from './getCurrencyHistory';
import { setHistoryEUR, setHistoryUSD } from '@store/reducers/currencySlice';

const useCurrencyHistory = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [resultUSD, resultEUR]: [ExchangeRateData[], ExchangeRateData[]] =
					await getCurrencyHistory();

				const updatedHistoryUSD: CurrencyHistoryData = [
					['Day', '', '', '', ''],
					...resultUSD.map(
						(item): HistoryEntry => [
							item.time_open.slice(0, 10),
							item.rate_low,
							item.rate_open,
							item.rate_close,
							item.rate_high,
						]
					),
				];

				const updatedHistoryEUR: CurrencyHistoryData = [
					['Day', '', '', '', ''],
					...resultEUR.map(
						(item): HistoryEntry => [
							item.time_open.slice(0, 10),
							item.rate_low,
							item.rate_open,
							item.rate_close,
							item.rate_high,
						]
					),
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
