import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

export const CurrencyItemContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 1rem;
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.currencyItemBackground
			: lightTheme.currencyItemBackground};
	border-radius: 6px;
	padding: 1rem 1.5rem;
	transition: all 0.3s;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}

	@media (max-width: 728px) {
		width: 100%;
		padding: 0.5rem 1rem;
	}
`;

export const CurrencyInfoSection = styled.div`
	display: flex;
	flex-direction: column;
	color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.currencyItemTextColor
			: lightTheme.mainTextColor};

	@media (max-width: 528px) {
		font-size: 0.8rem;
	}
`;

export const CurrencyImage = styled.img`
	width: 60px;

	@media (max-width: 728px) {
		width: 40px;
	}
`;
