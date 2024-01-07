import { darkTheme as dark, lightTheme as light } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

export const DropdownContainer = styled.select`
	background-color: ${() =>
		useTheme().mode === 'dark'
			? dark.modalElementBackground
			: light.modalElementBackground};
	color: ${() =>
		useTheme().mode === 'dark' ? dark.mainTextColor : light.mainTextColor};
	padding: 8px;
	border: none;
	border-radius: 4px;
	outline: none;
	width: 9rem;
	text-align: center;
	margin-bottom: 1rem;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 8px rgba(0, 188, 212, 0.5);
		border-color: #00bcd4;
	}

	&::-ms-expand {
		display: none;
	}

	option {
		background-color: ${() =>
			useTheme().mode === 'dark'
				? dark.modalElementBackground
				: light.modalElementBackground};
		color: ${() =>
			useTheme().mode === 'dark' ? dark.mainTextColor : light.mainTextColor};
	}
`;
