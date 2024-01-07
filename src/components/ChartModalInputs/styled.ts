import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

export const ChartInputsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	margin-bottom: 1rem;
`;

export const ChartModalInput = styled.input`
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.modalElementBackground
			: lightTheme.modalElementBackground};
	color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.mainTextColor
			: lightTheme.mainTextColor};
	padding: 8px;
	border: none;
	border-radius: 4px;
	outline: none;
	width: 11rem;
	font-size: 1rem;
	text-align: center;

	&:hover,
	&:focus {
		box-shadow: 0 0 8px #00bcd480;
		border-color: #00bcd4;
	}
`;
