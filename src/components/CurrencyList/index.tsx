import React from 'react';
import { useSelector } from 'react-redux';
import { currenciesRedux } from '@store/reducers/currencySlice';
import CurrencyItem from '../CurrencyItem';
import CurrenciesContainer from './styled';

export default function CurrencyList(): JSX.Element {
	const currencies = useSelector(currenciesRedux);

	return (
		<CurrenciesContainer>
			{currencies.map((item) => (
				<CurrencyItem key={item.code} item={item} />
			))}
		</CurrenciesContainer>
	);
}
