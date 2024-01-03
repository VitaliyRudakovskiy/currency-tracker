import React from 'react';
import { useSelector } from 'react-redux';
import { activeCurrencyRedux } from '@store/reducers/currencySlice';
import { selectInputValue } from '@store/reducers/inputSlice';
import { ICurrency } from '@interfaces/interfaces';
import ConvertedSumContainer from './styled';

interface ICurrencyItemProps {
	item: ICurrency;
}

export default function CurrencyItemForModal({
	item,
}: ICurrencyItemProps): JSX.Element {
	const activeCurrency: ICurrency = useSelector(activeCurrencyRedux);
	const inputValue: string = useSelector(selectInputValue);

	const convertedSum: string = (
		(parseFloat(inputValue) * item.value) /
		activeCurrency.value
	).toPrecision(5);

	return (
		<ConvertedSumContainer>
			{isNaN(+convertedSum) ? null : (
				<>
					{convertedSum} {item.code}
				</>
			)}
		</ConvertedSumContainer>
	);
}
