import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	exchangeRateRedux,
	setActiveCurrency,
} from '@store/reducers/currencySlice';
import { selectModalOpened, toggleModal } from '@store/reducers/modalSlice';
import { ICurrency } from '@interfaces/interfaces';
import useImageLoader from '@utils/useImageLoader';
import { currencyNames } from '@constants/currencies';

interface ICurrencyItem {
	item: ICurrency;
}

const CurrencyItem: React.FC<ICurrencyItem> = ({ item }) => {
	const exchangeRate = useSelector(exchangeRateRedux);
	const isModalVisible = useSelector(selectModalOpened);

	const dispatch = useDispatch();

	const currencyName = currencyNames[item.code] || 'Unknown Currency';
	const equivalent = item.value / exchangeRate.value;
	const imageSrc = useImageLoader(currencyName);

	const handleItemClick = useCallback(() => {
		dispatch(setActiveCurrency(item));
		dispatch(toggleModal(true));
		document.body.style.overflowY = 'hidden';
	}, [dispatch, item]);

	return (
		<>
			<ItemContainer onClick={handleItemClick}>
				<img src={imageSrc} alt="currency-logo" width="60px" />
				<InfoSection>
					<h4>{currencyName}</h4>
					<span>
						1 BYN = {equivalent.toPrecision(3)} {item.code}
					</span>
				</InfoSection>
			</ItemContainer>

			{isModalVisible && <ConvertingModal />}
		</>
	);
};

export default CurrencyItem;
