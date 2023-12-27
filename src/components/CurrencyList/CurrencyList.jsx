import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import getCurrency from '../../utils/getCurrency';
import { targetCurrencies } from '../../constants/targetCurrencies';
import CurrencyItem from './CurrencyItem/CurrencyItem';
import { CurrenciesContainer } from './styled';
import { setExchangeRate } from '../../store/reducers/currencyReducer';

export default function CurrencyList() {
	const [currencies, setCurrencies] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const currencyData = await getCurrency();

				const exchangeRate = currencyData.data.BYN;
				dispatch(setExchangeRate(exchangeRate));

				const currenciesFromApi = targetCurrencies.map((code) => ({
					code,
					value: currencyData.data[code]?.value || 0,
				}));

				setCurrencies(currenciesFromApi);
			} catch (error) {
				throw new Error('Error in Home component: ', error);
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
