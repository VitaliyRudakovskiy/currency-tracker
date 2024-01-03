import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

export const ItemContainer = styled.div`
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
`;

export const InfoSection = styled.div`
	display: flex;
	flex-direction: column;
	color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.currencyItemTextColor
			: lightTheme.mainTextColor};
`;
