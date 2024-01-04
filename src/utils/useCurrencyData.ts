import { useEffect } from 'react';
import {
	setCurrenciesToStore,
	setExchangeRate,
	setUpdateTime,
} from '@store/reducers/currencySlice';
import { useDispatch } from 'react-redux';
import getCurrency from './getCurrency';
import { ICurrency } from '@interfaces/interfaces';
import { targetCurrencies } from '@constants/currencies';

const useCurrencyData = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const currencyData = await getCurrency();

				const exchangeRate = currencyData.data.BYN.value;
				dispatch(setExchangeRate(exchangeRate));

				const lastUpdate = currencyData.meta.last_updated_at;
				dispatch(setUpdateTime(lastUpdate));

				const currenciesFromApi: ICurrency[] = targetCurrencies.map((code) => ({
					code,
					value: currencyData.data[code]?.value || 0,
				}));

				dispatch(setCurrenciesToStore(currenciesFromApi));
			} catch (error) {
				throw new Error(`Error in useCurrencyData hook: ${error}`);
			}
		};

		fetchData();
	}, [dispatch, targetCurrencies]);
};

export default useCurrencyData;
