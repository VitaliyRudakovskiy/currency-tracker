import styled, { useTheme } from 'styled-components';
import { darkTheme, lightTheme } from '@constants/colors';

export const ChartInputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ChartInput = styled.input`
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
