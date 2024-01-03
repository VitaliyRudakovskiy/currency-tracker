import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	setExchangeRate,
	setCurrenciesToStore,
	setUpdateTime,
} from '@store/reducers/currencySlice';
import { ICurrency } from '@interfaces/interfaces';
import getCurrency from '@utils/getCurrency';
import { targetCurrencies } from '@constants/currencies';
import CurrencyItem from '../CurrencyItem';
import CurrenciesContainer from './styled';

export default function CurrencyList(): JSX.Element {
	const [currencies, setCurrencies] = useState<ICurrency[]>([]);
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
				setCurrencies(currenciesFromApi);
			} catch (error) {
				throw new Error(`Error in Home component: ${error}`);
			}
		};

		fetchData();
	}, []);

	return (
		<CurrenciesContainer>
			{currencies.map((item) => (
				<CurrencyItem key={item.code} item={item} />
			))}
		</CurrenciesContainer>
	);
}
