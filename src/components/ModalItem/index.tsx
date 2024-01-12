import React from 'react';
import { useSelector } from 'react-redux';
import {
	activeCurrencyRedux,
	currencyToConvertRedux,
} from '@store/reducers/currencySlice';
import { selectInputValue } from '@store/reducers/inputSlice';
import { ICurrency } from '@interfaces/interfaces';
import ConvertedSumContainer from './styled';

function ModalItem(): JSX.Element {
	const activeCurrency: ICurrency = useSelector(activeCurrencyRedux);
	const currencyToConvert: ICurrency = useSelector(currencyToConvertRedux);
	const inputValue: string = useSelector(selectInputValue);

	const convertedSum: string = (
		(parseFloat(inputValue) * currencyToConvert.value) /
		activeCurrency.value
	).toPrecision(5);

	return (
		<ConvertedSumContainer data-cy="modal-item" data-testid="modal-item">
			{!Number.isNaN(+convertedSum) && (
				<>
					{convertedSum} {currencyToConvert.code}
				</>
			)}
		</ConvertedSumContainer>
	);
}

export default ModalItem;
