import { darkTheme as dark, lightTheme as light } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

const Dropdown = styled.select`
	background-color: ${() =>
		useTheme().mode === 'dark'
			? dark.modalElementBackground
			: light.modalElementBackground};
	color: ${() =>
		useTheme().mode === 'dark' ? dark.mainTextColor : light.mainTextColor};
	padding: 8px;
	border: none;
	border-radius: 0 4px 4px 0;
	outline: none;
	width: 4.5rem;
	cursor: pointer;
	font-size: 1rem;

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

export default Dropdown;
