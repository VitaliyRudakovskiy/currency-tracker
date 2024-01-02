import React from 'react';
import { useSelector } from 'react-redux';
import CurrencyItemModal from '../CurrencyItemModal';
import {
	activeCurrencyRedux,
	currenciesRedux,
} from '@store/reducers/currencySlice';
import { ICurrency } from '@interfaces/interfaces';

const CurrenciesListModal: React.FC = () => {
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
};

export default CurrenciesListModal;
