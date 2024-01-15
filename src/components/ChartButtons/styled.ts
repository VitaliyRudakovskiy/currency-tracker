import {
	getFlex,
	getPercent,
	getPx,
	getRem,
	getValue,
} from '@utils/themeHelper';
import styled from 'styled-components';

const rem01 = getRem('rem0_6');
const rem08 = getRem('rem0_8');
const rem1 = getRem('rem1');
const rem1and2 = getRem('rem1_2');
const rem2 = getRem('rem2');
const px1 = getPx('px1');
const px5 = getPx('px5');
const px10 = getPx('px10');
const px20 = getPx('px20');
const px30 = getPx('px30');
const px40 = getPx('px40');
const vw100 = getPercent('vw100');
const px380 = getPx('px380');
const mainTextColor = getValue('mainTextColor');
const chartButtonBackgroundColor = getValue('chartButtonBackgroundColor');
const chartButtonTextColor = getValue('chartButtonTextColor');
const chartButtonHoverColor = getValue('chartButtonHoverColor');
const chartButtonActiveColor = getValue('chartButtonActiveColor');
const flexCenter = getFlex('center');

export const ChartButtonsWrapper = styled.section`
	width: ${vw100};
	${flexCenter};
	flex-direction: column;
`;

export const ButtonsContainer = styled.div`
	${flexCenter};
	flex-wrap: wrap;
	width: ${vw100};
	padding: 0 ${rem1};
	gap: ${rem1};
	margin-top: ${rem2};
	margin-bottom: ${rem01};
`;

export const ChartButton = styled.button`
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

	@media (max-width: ${px380}) {
		font-size: 0.7rem;
		font-weight: 400;
		padding: 0.6rem 0.9rem;
	}
`;

export const DatesErrorMessage = styled.p`
	margin-top: ${rem1};
	padding: 0 ${rem1};
	text-align: center;
	color: ${mainTextColor};
	text-shadow:
		0 0 ${px10} red,
		0 0 ${px20} red,
		0 0 ${px30} red,
		0 0 ${px40} red;
`;
