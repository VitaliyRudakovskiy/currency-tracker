import React from 'react';
import { useSelector } from 'react-redux';
import Modal from '@components/Modal';
import { currenciesRedux } from '@store/reducers/currencySlice';
import { selectModalOpened } from '@store/reducers/modalSlice';

import CurrencyItem from './CurrencyItem';
import CurrenciesContainer from './styled';

export default function CurrencyList(): JSX.Element {
	const currencies = useSelector(currenciesRedux);
	const isModalVisible: boolean = useSelector(selectModalOpened);

	return (
		<>
			<CurrenciesContainer data-cy="currency-list">
				{currencies.map((item) => (
					<CurrencyItem key={item.code} item={item} />
				))}
			</CurrenciesContainer>
			{isModalVisible && <Modal />}
		</>
	);
}
