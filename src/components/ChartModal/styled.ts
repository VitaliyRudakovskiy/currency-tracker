import {
	getFlex,
	getPercent,
	getPx,
	getRem,
	getValue,
	getZIndex,
} from '@utils/themeHelper';
import styled from 'styled-components';

const rem02 = getRem('rem0_2');
const rem05 = getRem('rem0_5');
const rem08 = getRem('rem0_8');
const rem1 = getRem('rem1');
const rem1and2 = getRem('rem1_2');
const rem1and3 = getRem('rem1_3');
const rem1and5 = getRem('rem1_5');
const rem2 = getRem('rem2');
const rem3 = getRem('rem3');
const rem40 = getRem('rem40');
const wFull = getPercent('w-full');
const z10 = getZIndex('z10');
const px1 = getPx('px1');
const px5 = getPx('px5');
const px8 = getPx('px8');
const px10 = getPx('px8');
const px464 = getPx('px464');
const modalBackground = getValue('modalBackground');
const chartButtonHoverColor = getValue('chartButtonHoverColor');
const chartButtonActiveColor = getValue('chartButtonActiveColor');
const chartButtonBackgroundColor = getValue('chartButtonBackgroundColor');
const chartButtonTextColor = getValue('chartButtonTextColor');
const mainTextColor = getValue('mainTextColor');
const flexCenter = getFlex('center');

export const ChartModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: ${wFull};
	height: ${wFull};
	background: transparent;
	${flexCenter};
	z-index: ${z10};
`;

export const ChartModalContainer = styled.div`
	position: relative;
	background: ${modalBackground};
	border-radius: ${px8};
	padding: ${rem05} ${rem1and5} ${rem1};
	max-width: ${rem40};
	box-shadow: 0 0 ${px10} rgba(0, 0, 0, 0.2);
	${flexCenter};
	flex-direction: column;
`;

export const ChartModalTitle = styled.h3`
	text-align: center;
	font-size: ${rem2};
	margin-bottom: ${rem1};
	color: ${mainTextColor};

	@media (max-width: ${px464}) {
		font-size: ${rem1and3};
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: ${rem08};
	font-size: ${rem3};
	background: none;
	border: none;
	color: red;
	cursor: pointer;

	@media (max-width: ${px464}) {
		top: -${rem02};
	}
`;

export const SubmitButton = styled.button`
	padding: ${rem08} ${rem1and2};
	font-size: ${rem1};
	font-weight: 600;
	letter-spacing: ${px1};
	background-color: ${chartButtonBackgroundColor};
	color: ${chartButtonTextColor};
	border: none;
	border-radius: ${px5};
	transition: all 0.3s;
	cursor: pointer;

	&:hover {
		background-color: ${chartButtonHoverColor};
	}

	&:active {
		background-color: ${chartButtonActiveColor};
		box-shadow: inset 0 0 ${px10} rgba(0, 0, 0, 0.3);
	}
`;
