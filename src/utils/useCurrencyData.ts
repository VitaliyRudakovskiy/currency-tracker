import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currencyNames } from '@constants/currencies';
import {
	setCurrenciesToStore,
	setExchangeRate,
	setUpdateTime,
} from '@store/reducers/currencySlice';

import getCurrency from './getCurrency';

interface ICurrency {
	code: string;
	value: number;
}

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

				const currenciesFromApi: ICurrency[] = Object.keys(currencyNames).map(
					(code) => ({
						code,
						value: currencyData.data[code]?.value || 0,
					})
				);

				dispatch(setCurrenciesToStore(currenciesFromApi));
			} catch (error) {
				throw new Error(`Error in useCurrencyData hook: ${error}`);
			}
		};

		fetchData();
	}, [dispatch]);
};

export default useCurrencyData;
