import React from 'react';
import { useSelector } from 'react-redux';
import {
	activeCurrencyRedux,
	currenciesRedux,
} from '@store/reducers/currencySlice';
import { ICurrency } from '@interfaces/interfaces';
import ModalItem from '../ModalItem';
import ListContainer from './styled';

export default function ModalList(): JSX.Element {
	const activeCurrency: ICurrency = useSelector(activeCurrencyRedux);
	const currencies: ICurrency[] = useSelector(currenciesRedux);

	const renderedCurrencies = currencies.filter(
		(item) => item.code !== activeCurrency.code
	);

	return (
		<ListContainer>
			{renderedCurrencies.map((item) => (
				<ModalItem key={item.code} item={item} />
			))}
		</ListContainer>
	);
}
