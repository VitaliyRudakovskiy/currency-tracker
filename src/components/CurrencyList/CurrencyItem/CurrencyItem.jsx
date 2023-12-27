import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ItemContainer, InfoSection } from './styled';
import { currencyNames } from '../../../constants/currencyNames';
import useImageLoader from '../../../utils/useImageLoader';

export default function CurrencyItem({ item }) {
	const exchangeRate = useSelector((state) => state.currency.exchangeRate);

	const currencyName = currencyNames[item.code] || undefined;
	const equivalent = (item.value * 1) / exchangeRate.value;

	const imageSrc = useImageLoader(currencyName);

	return (
		<ItemContainer>
			<img src={imageSrc} alt="currency-logo" width="60px" />
			<InfoSection>
				<h4>{currencyName}</h4>
				<span>
					1 BYN = {equivalent.toPrecision(3)} {item.code}
				</span>
			</InfoSection>
		</ItemContainer>
	);
}

CurrencyItem.propTypes = {
	item: PropTypes.shape({
		code: PropTypes.string.isRequired,
		value: PropTypes.number.isRequired,
	}).isRequired,
};
