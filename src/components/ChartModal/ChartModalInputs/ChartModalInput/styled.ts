import { getPx, getRem, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const rem1 = getRem('rem1');
const rem11 = getRem('rem11');
const px4 = getPx('px4');
const px8 = getPx('px8');
const modalElementBackground = getValue('modalElementBackground');
const mainTextColor = getValue('mainTextColor');
const modalInputHoverColor = getValue('modalInputHoverColor');
const modalInputHoverBorderColor = getValue('modalInputHoverBorderColor');

export const ChartInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	color: ${mainTextColor};
`;

export const ChartInput = styled.input`
	background-color: ${modalElementBackground};
	color: inherit;
	padding: ${px8};
	border-radius: ${px4};
	border: none;
	outline: none;
	text-align: center;
	width: ${rem11};
	font-size: ${rem1};

	&:hover,
	&:focus {
		box-shadow: 0 0 ${px8} ${modalInputHoverColor};
		border-color: ${modalInputHoverBorderColor};
	}
`;
