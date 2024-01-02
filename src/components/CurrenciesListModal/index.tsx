import React from 'react';
import { useSelector } from 'react-redux';
import {
	activeCurrencyRedux,
	currenciesRedux,
} from '@store/reducers/currencySlice';
import { ICurrency } from '@interfaces/interfaces';
import CurrencyItemModal from '../CurrencyItemModal';

export default function CurrenciesListModal(): JSX.Element {
	const activeCurrency: ICurrency = useSelector(activeCurrencyRedux);
	const currencies: ICurrency[] = useSelector(currenciesRedux);

	const renderedCurrencies = currencies.filter(
		(item) => item.code !== activeCurrency.code
	);

	return (
		<div>
			{renderedCurrencies.map((item) => (
				<CurrencyItemModal key={item.code} item={item} />
			))}
		</div>
	);
}
