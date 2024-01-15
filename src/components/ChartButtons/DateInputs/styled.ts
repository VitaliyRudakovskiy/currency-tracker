import { getFlex, getPx, getRem, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const rem06 = getRem('rem0_6');
const rem07 = getRem('rem0_7');
const rem08 = getRem('rem0_8');
const rem09 = getRem('rem0_9');
const rem1 = getRem('rem1');
const px4 = getPx('px4');
const px8 = getPx('px8');
const px380 = getPx('px380');
const backgroundColor = getValue('modalElementBackground');
const modalInputHoverBorderColor = getValue('modalInputHoverBorderColor');
const textColor = getValue('mainTextColor');
const flexCenter = getFlex('center');

export const SelectsContainer = styled.div`
	${flexCenter};
	gap: ${rem1};
`;

export const DatesSelect = styled.select`
	background-color: ${backgroundColor};
	color: ${textColor};
	padding: ${rem08} ${px8};
	border: none;
	outline: none;
	border-radius: ${px4};
	text-align: center;
	font-size: ${rem1};
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 ${px8} rgba(0, 188, 212, 0.5);
		border-color: ${modalInputHoverBorderColor};
	}

	&::-ms-expand {
		display: none;
	}

	option {
		background-color: ${backgroundColor};
		color: ${textColor};
	}

	@media (max-width: ${px380}) {
		font-size: ${rem07};
		padding: ${rem06} ${rem09};
	}
`;
