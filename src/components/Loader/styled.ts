import styled, { keyframes } from 'styled-components';

const spinning = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
	width: ${({ theme }) => theme.valueInPercent.vw100};
	${({ theme }) => theme.flex.center};
	flex: 1;
	margin: 0 auto;
`;

export const RingLoader = styled.div`
	display: inline-block;
	position: relative;
	width: ${({ theme }) => theme.valueInPx.px80};
	height: ${({ theme }) => theme.valueInPx.px80};
`;

export const RingPart = styled.div`
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: ${({ theme }) => theme.valueInPx.px64};
	height: ${({ theme }) => theme.valueInPx.px64};
	margin: ${({ theme }) => theme.valueInPx.px8};
	border: ${({ theme }) => theme.valueInPx.px8} solid ${({ theme }) => theme.spinnerColor};
	border-radius: 50%;
	animation: ${spinning} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: ${({ theme }) => theme.spinnerColor} transparent transparent transparent;

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
