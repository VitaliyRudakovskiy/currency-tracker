import { getPercent, getPx, getRem, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const rem05 = getRem('rem0_5');
const rem08 = getRem('rem0_8');
const rem1 = getRem('rem1');
const rem1and5 = getRem('rem1_5');
const wFull = getPercent('w-full');
const px6 = getPx('px6');
const px40 = getPx('px40');
const px60 = getPx('px60');
const px528 = getPx('px528');
const px728 = getPx('px728');
const currencyItemBackground = getValue('currencyItemBackground');
const currencyItemTextColor = getValue('currencyItemTextColor');

export const CurrencyItemContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: ${rem1};
	background-color: ${currencyItemBackground};
	border-radius: ${px6};
	padding: ${rem1} ${rem1and5};
	transition: all 0.3s;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}

	@media (max-width: ${px728}) {
		width: ${wFull};
		padding: ${rem05} ${rem1};
	}
`;

export const CurrencyInfoSection = styled.div`
	display: flex;
	flex-direction: column;
	color: ${currencyItemTextColor};

	@media (max-width: ${px528}) {
		font-size: ${rem08};
	}
`;

export const CurrencyImage = styled.img`
	width: ${px60};

	@media (max-width: ${px728}) {
		width: ${px40};
	}
`;
