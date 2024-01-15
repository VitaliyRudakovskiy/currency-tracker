import {
	getFlex,
	getPercent,
	getPx,
	getRem,
	getValue,
	getZIndex,
} from '@utils/themeHelper';
import styled from 'styled-components';

const rem0 = getRem('rem0');
const rem02 = getRem('rem0_2');
const rem03 = getRem('rem0_3');
const rem035 = getRem('rem0_35');
const rem05 = getRem('rem0_5');
const rem08 = getRem('rem0_8');
const rem1 = getRem('rem1');
const rem1and2 = getRem('rem1_2');
const rem1and5 = getRem('rem1_5');
const rem2 = getRem('rem2');
const rem3 = getRem('rem3');
const rem30 = getRem('rem30');
const wFull = getPercent('w-full');
const z10 = getZIndex('z10');
const px4 = getPx('px4');
const px8 = getPx('px8');
const px10 = getPx('px8');
const px380 = getPx('px380');
const modalBackground = getValue('modalBackground');
const modalElementBackground = getValue('modalElementBackground');
const mainTextColor = getValue('mainTextColor');
const flexCenter = getFlex('center');

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: ${wFull};
	height: ${wFull};
	background: transparent;
	${flexCenter};
	z-index: ${z10};
`;

export const ModalContainer = styled.div`
	position: relative;
	background: ${modalBackground};
	border-radius: ${px8};
	padding: ${rem03} ${rem1and5} ${rem1and2};
	max-width: ${rem30};
	box-shadow: 0 0 ${px10} rgba(0, 0, 0, 0.2);
	${flexCenter};
	flex-direction: column;

	@media (max-width: ${px380}) {
		padding: ${rem05};
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: ${rem02};
	right: ${rem08};
	font-size: ${rem3};
	background: none;
	border: none;
	color: red;
	cursor: pointer;

	@media (max-width: ${px380}) {
		top: ${rem0};
		right: ${rem08};
	}
`;

export const ModalName = styled.h3`
	text-align: center;
	font-size: ${rem2};
	margin-bottom: ${rem1};
	color: #acde1d;

	@media (max-width: ${px380}) {
		font-size: ${rem1and5};
	}
`;

export const InputContainer = styled.div`
	${flexCenter};
	margin-bottom: ${rem1};
`;

export const InputActiveCode = styled.p`
	background-color: ${modalElementBackground};
	color: ${mainTextColor};
	padding: ${rem035} ${rem05};
	border-radius: 0 ${px4} ${px4} 0;
`;

export const ResultContainer = styled.div`
	${flexCenter};
	gap: ${rem1};
`;
