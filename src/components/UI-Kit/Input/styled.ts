import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

const InputContainer = styled.input`
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
	border-radius: 4px 0 0 4px;
	outline: none;
	width: 13rem;
	font-size: 1.05rem;
	text-align: right;

	&:hover,
	&:focus {
		box-shadow: 0 0 8px #00bcd480;
		border-color: #00bcd4;
	}
`;

export default InputContainer;
