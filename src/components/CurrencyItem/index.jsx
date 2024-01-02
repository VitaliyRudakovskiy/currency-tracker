import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ItemContainer, InfoSection } from './styled';
import { currencyNames } from '@constants/currencyNames';
import useImageLoader from '@utils/useImageLoader';
import ConvertingModal from '@components/ConvertingModal';

export default function CurrencyItem({ item }) {
	const exchangeRate = useSelector((state) => state.currency.exchangeRate);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const currencyName = currencyNames[item.code] || undefined;
	const equivalent = item.value / exchangeRate.value;

	const imageSrc = useImageLoader(currencyName);

	const openModal = () => {
		setIsModalVisible(true);
		document.body.style.overflow = 'hidden';
	};

	// const closeModal = () => {
	// 	setIsModalVisible(false);
	// 	document.body.style.overflow = 'auto';
	// };

	return (
		<ItemContainer onClick={openModal}>
			<img src={imageSrc} alt="currency-logo" width="60px" />
			<InfoSection>
				<h4>{currencyName}</h4>
				<span>
					1 BYN = {equivalent.toPrecision(3)} {item.code}
				</span>
			</InfoSection>

			{isModalVisible && <ConvertingModal />}
		</ItemContainer>
	);
}

CurrencyItem.propTypes = {
	item: PropTypes.shape({
		code: PropTypes.string.isRequired,
		value: PropTypes.number.isRequired,
	}).isRequired,
};
