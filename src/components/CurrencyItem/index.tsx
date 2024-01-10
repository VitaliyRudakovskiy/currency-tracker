import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setActiveCurrency,
	exchangeRateRedux,
} from '@store/reducers/currencySlice';
import { toggleModal } from '@store/reducers/modalSlice';
import { ICurrency } from '@interfaces/interfaces';
import { currencyNames } from '@constants/currencies';
import useImageLoader from '@utils/useImageLoader';
import { ItemContainer, InfoSection, CurrencyImage } from './styled';

interface CurrencyItemProps {
	item: ICurrency;
}

const CurrencyItem = memo(({ item }: CurrencyItemProps): JSX.Element => {
	const exchangeRate: number = useSelector(exchangeRateRedux);

	const dispatch = useDispatch();

	const currencyName: string = currencyNames[item.code];
	const equivalent: number = item.value / exchangeRate;
	const imageSrc: string | undefined = useImageLoader(currencyName);

	const handleItemClick = () => {
		dispatch(setActiveCurrency(item));
		dispatch(toggleModal(true));
		document.body.style.overflowY = 'hidden';
	};

	return (
		<ItemContainer onClick={handleItemClick} data-cy="card">
			{imageSrc && <CurrencyImage src={imageSrc} alt="currency-logo" />}

			<InfoSection>
				<h4>{currencyName}</h4>
				<span>
					1 BYN = {equivalent.toPrecision(3)} {item.code}
				</span>
			</InfoSection>
		</ItemContainer>
	);
});

export default CurrencyItem;
