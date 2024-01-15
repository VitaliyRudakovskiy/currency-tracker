import { getPx, getRem, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const rem1and05 = getRem('rem1_05');
const rem13 = getRem('rem13');
const px4 = getPx('px4');
const px8 = getPx('px8');
const modalElementBackground = getValue('modalElementBackground');
const modalInputHoverColor = getValue('modalInputHoverColor');
const modalInputHoverBorderColor = getValue('modalInputHoverBorderColor');
const mainTextColor = getValue('mainTextColor');

const InputContainer = styled.input`
	background-color: ${modalElementBackground};
	color: ${mainTextColor};
	padding: ${px8};
	border-radius: ${px4} 0 0 ${px4};
	border: none;
	outline: none;
	width: ${rem13};
	font-size: ${rem1and05};
	text-align: right;

	&:hover,
	&:focus {
		box-shadow: 0 0 ${px8} ${modalInputHoverColor};
		border-color: ${modalInputHoverBorderColor};
	}
`;

export default InputContainer;
