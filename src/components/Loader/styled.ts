import { getFlex, getPercent, getPx, getValue } from '@utils/themeHelper';
import styled, { keyframes } from 'styled-components';

const spinnerColor = getValue('spinnerColor');
const vw100 = getPercent('vw100');
const px8 = getPx('px8');
const px64 = getPx('px64');
const px80 = getPx('px80');
const flexCenter = getFlex('center');

const spinning = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
	width: ${vw100};
	${flexCenter};
	flex: 1;
	margin: 0 auto;
`;

export const RingLoader = styled.div`
	display: inline-block;
	position: relative;
	width: ${px80};
	height: ${px80};
`;

export const RingPart = styled.div`
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: ${px64};
	height: ${px64};
	margin: ${px8};
	border: ${px8} solid ${spinnerColor};
	border-radius: 50%;
	animation: ${spinning} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: ${spinnerColor} transparent transparent transparent;

	&:nth-child(1) {
		animation-delay: -0.45s;
	}

	&:nth-child(2) {
		animation-delay: -0.3s;
	}

	&:nth-child(3) {
		animation-delay: -0.15s;
	}
`;
