import React from 'react';
import { useSelector } from 'react-redux';
import {
	activeCurrencyRedux,
	currencyToConvertRedux,
} from '@store/reducers/currencySlice';
import { selectInputValue } from '@store/reducers/inputSlice';
import convertCurrencyValue from '@utils/convertCurrencyValue';

import { ICurrency } from './interfaces';
import ConvertedSumContainer from './styled';

function ModalItem(): JSX.Element {
	const activeCurrency: ICurrency = useSelector(activeCurrencyRedux);
	const currencyToConvert: ICurrency = useSelector(currencyToConvertRedux);
	const inputValue: string = useSelector(selectInputValue);

	const convertedSum = convertCurrencyValue(
		inputValue,
		currencyToConvert,
		activeCurrency
	);

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
