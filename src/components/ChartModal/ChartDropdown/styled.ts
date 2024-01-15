import { getPx, getRem, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const rem1 = getRem('rem1');
const rem9 = getRem('rem9');
const px4 = getPx('px4');
const px8 = getPx('px8');
const backgroundColor = getValue('modalElementBackground');
const textColor = getValue('mainTextColor');

const DropdownContainer = styled.select`
	background-color: ${backgroundColor};
	color: ${textColor};
	padding: ${px8};
	border: none;
	border-radius: ${px4};
	outline: none;
	width: ${rem9};
	text-align: center;
	margin-bottom: ${rem1};
	font-size: ${rem1};
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 ${px8} rgba(0, 188, 212, 0.5);
		border-color: #00bcd4;
	}

	&::-ms-expand {
		display: none;
	}

	option {
		background-color: ${backgroundColor};
		color: ${textColor};
	}
`;

export default DropdownContainer;
