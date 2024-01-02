import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setActiveCurrency,
	exchangeRateRedux,
} from '@store/reducers/currencySlice';
import { selectModalOpened, toggleModal } from '@store/reducers/modalSlice';
import { ICurrency } from '@interfaces/interfaces';
import { ItemContainer, InfoSection } from './styled';
import { currencyNames } from '@constants/currencies';
import useImageLoader from '@utils/useImageLoader';
import ConvertingModal from '../ConvertingModal';

interface CurrencyItemProps {
	item: ICurrency;
}

function CurrencyItem({ item }: CurrencyItemProps): JSX.Element {
	const exchangeRate: number = useSelector(exchangeRateRedux);
	const isModalVisible: boolean = useSelector(selectModalOpened);

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
		<>
			<ItemContainer onClick={handleItemClick}>
				{imageSrc && <img src={imageSrc} alt="currency-logo" width="60px" />}

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
}

export default CurrencyItem;