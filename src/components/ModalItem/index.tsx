import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { activeCurrencyRedux } from '@store/reducers/currencySlice';
import { selectInputValue } from '@store/reducers/inputSlice';
import { ICurrency } from '@interfaces/interfaces';
import ConvertedSumContainer from './styled';

interface ICurrencyItemProps {
	item: ICurrency;
}

const ModalItem = memo(({ item }: ICurrencyItemProps): JSX.Element => {
	const activeCurrency: ICurrency = useSelector(activeCurrencyRedux);
	const inputValue: string = useSelector(selectInputValue);

	const convertedSum: string = (
		(parseFloat(inputValue) * item.value) /
		activeCurrency.value
	).toPrecision(5);

	return (
		<ConvertedSumContainer data-testid="modal-item">
			{!Number.isNaN(+convertedSum) && (
				<>
					{convertedSum} {item.code}
				</>
			)}
		</ConvertedSumContainer>
	);
});

export default ModalItem;
