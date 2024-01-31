import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyNames } from '@constants/currencies';
import { currencyToConvertRedux, setActiveCurrency } from '@store/reducers/currencySlice';
import { toggleModal } from '@store/reducers/modalSlice';
import useImageLoader from '@utils/useImageLoader';

import { CurrencyItemProps } from './interfaces';
import { CurrencyImage, CurrencyInfoSection, CurrencyItemContainer } from './styled';

const CurrencyItem = memo(({ item }: CurrencyItemProps): JSX.Element => {
	const lastConvertedCurrency = useSelector(currencyToConvertRedux);

	const dispatch = useDispatch();

	const currencyName: string = currencyNames[item.code];
	const equivalent: number = lastConvertedCurrency.value / item.value;
	const imageSrc: string | undefined = useImageLoader(currencyName);

	const handleItemClick = () => {
		dispatch(setActiveCurrency(item));
		dispatch(toggleModal(true));
	};

	return (
		<CurrencyItemContainer onClick={handleItemClick} data-cy="card">
			{imageSrc && <CurrencyImage src={imageSrc} alt="currency-logo" />}

			<CurrencyInfoSection>
				<h4>{currencyName}</h4>
				<span>
					1 {item.code} = {equivalent.toPrecision(3)} {lastConvertedCurrency.code}
				</span>
			</CurrencyInfoSection>
		</CurrencyItemContainer>
	);
});

export default CurrencyItem;
