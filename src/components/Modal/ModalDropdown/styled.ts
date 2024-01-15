import { getPx, getRem, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const rem1 = getRem('rem1');
const rem6 = getRem('rem6');
const px4 = getPx('px4');
const px10 = getPx('px10');
const backgroundColor = getValue('modalElementBackground');
const modalInputHoverBorderColor = getValue('modalInputHoverBorderColor');
const textColor = getValue('mainTextColor');

const Dropdown = styled.select`
	background-color: ${backgroundColor};
	color: ${textColor};
	padding: ${px10};
	border-radius: ${px4};
	border: none;
	outline: none;
	width: ${rem6};
	font-size: ${rem1};
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 8px rgba(0, 188, 212, 0.5);
		border-color: ${modalInputHoverBorderColor};
	}

	&::-ms-expand {
		display: none;
	}

	option {
		background-color: ${backgroundColor};
		color: ${textColor};
	}
`;

export default Dropdown;
