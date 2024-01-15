import {
	getFlex,
	getPercent,
	getPx,
	getRem,
	getValue,
} from '@utils/themeHelper';
import styled from 'styled-components';

const rem02 = getRem('rem0_2');
const rem07 = getRem('rem0_7');
const rem1 = getRem('rem1');
const rem1and25 = getRem('rem1_25');
const rem3 = getRem('rem3');
const rem6and5 = getRem('rem6_5');
const vw100 = getPercent('vw100');
const perc40 = getPercent('perc40');
const perc50 = getPercent('perc50');
const perc70 = getPercent('perc70');
const perc100 = getPercent('w-full');
const px4 = getPx('px4');
const px8 = getPx('px8');
const px380 = getPx('px380');
const px510 = getPx('px510');
const px810 = getPx('px810');
const px1010 = getPx('px1010');
const backgroundColor = getValue('modalElementBackground');
const textColor = getValue('mainTextColor');
const modalInputHoverColor = getValue('modalInputHoverColor');
const modalInputHoverBorderColor = getValue('modalInputHoverBorderColor');
const flexCenter = getFlex('center');

export const MapInputContainer = styled.div`
	${flexCenter};
	flex-direction: column;
	width: ${vw100};
	padding: 0 ${rem3};
`;

export const MapInput = styled.input`
	width: ${perc40};
	text-align: center;
	margin-bottom: ${rem1};
	background-color: ${backgroundColor};
	color: ${textColor};
	padding: ${px8};
	border: none;
	outline: none;
	border-radius: ${px4};
	font-size: ${rem1and25};

	&:hover,
	&:focus {
		box-shadow: 0 0 ${px8} ${modalInputHoverColor};
		border-color: ${modalInputHoverBorderColor};
	}

	@media (max-width: ${px1010}) {
		width: ${perc50};
	}

	@media (max-width: ${px810}) {
		width: ${perc70};
	}

	@media (max-width: ${px510}) {
		width: ${perc100};
		font-size: ${rem1};
	}
`;

export const MapTooltipsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	justify-content: center;
	align-items: center;
	gap: ${rem02};
	margin: 0 auto;
	width: ${perc40};
	max-height: ${rem6and5};
	overflow-y: auto;
	margin-bottom: ${rem1};

	scrollbar-color: ${backgroundColor};

	&::-webkit-scrollbar {
		width: ${rem07};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${textColor};
		border-radius: ${px4};
	}

	@media (max-width: ${px1010}) {
		width: ${perc50};
	}

	@media (max-width: ${px810}) {
		width: ${perc70};
	}

	@media (max-width: ${px510}) {
		width: ${perc100};
	}

	@media (max-width: ${px380}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const MapTooltip = styled.button`
	background-color: ${backgroundColor};
	color: ${textColor};
	padding: ${px8};
	border: none;
	border-radius: ${px4};
	transition: all 0.1s;
	cursor: pointer;

	&:hover,
	&:focus,
	&:active {
		background-color: ${modalInputHoverBorderColor};
	}
`;
