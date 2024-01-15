import {
	getFlex,
	getPercent,
	getPx,
	getRem,
	getValue,
} from '@utils/themeHelper';
import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
`;

const rem05 = getRem('rem0_5');
const rem06 = getRem('rem0_6');
const rem07 = getRem('rem0_7');
const rem1 = getRem('rem1');
const rem1and5 = getRem('rem1_5');
const rem2 = getRem('rem2');
const px1 = getPx('px1');
const px528 = getPx('px528');
const perc50 = getPercent('perc50');
const mainTextColor = getValue('mainTextColor');
const pulseCircleColor = getValue('pulseCircleColor');
const flexCenter = getFlex('center');

export const PulseContainer = styled.div`
	${flexCenter};
	gap: ${rem1};
	margin-bottom: ${rem2};

	@media (max-width: ${px528}) {
		gap: ${rem06};
		margin-bottom: ${rem1and5};
	}
`;

export const PulseCircle = styled.div`
	position: relative;
	border-radius: ${perc50};
	background: ${pulseCircleColor};
	width: ${rem1};
	height: ${rem1};

	&::before,
	&::after {
		content: '';
		position: absolute;
		border: ${px1} solid ${pulseCircleColor};
		left: -${rem05};
		opacity: 0;
		right: -${rem05};
		top: -${rem05};
		bottom: -${rem05};
		border-radius: ${perc50};
		animation: ${pulseAnimation} 2s linear infinite;
	}

	&::after {
		animation-delay: 1s;
	}
`;

export const UpdateString = styled.p`
	color: ${mainTextColor};

	@media (max-width: ${px528}) {
		font-size: ${rem07};
	}
`;
