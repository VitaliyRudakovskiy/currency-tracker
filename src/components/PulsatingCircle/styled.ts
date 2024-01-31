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

export const PulseContainer = styled.div`
	${({ theme }) => theme.flex.center};
	gap: ${({ theme }) => theme.valueInRem.rem1};
	margin-bottom: ${({ theme }) => theme.valueInRem.rem2};

	@media (max-width: ${({ theme }) => theme.valueInPx.px528}) {
		gap: ${({ theme }) => theme.valueInRem.rem0_6};
		margin-bottom: ${({ theme }) => theme.valueInRem.rem1_5};
	}
`;

export const PulseCircle = styled.div`
	position: relative;
	border-radius: ${({ theme }) => theme.valueInPercent.perc50};
	background: ${({ theme }) => theme.pulseCircleColor};
	width: ${({ theme }) => theme.valueInRem.rem1};
	height: ${({ theme }) => theme.valueInRem.rem1};

	&::before,
	&::after {
		content: '';
		position: absolute;
		border: ${({ theme }) => theme.valueInPx.px1} solid ${({ theme }) => theme.pulseCircleColor};
		left: -${({ theme }) => theme.valueInRem.rem0_5};
		opacity: 0;
		right: -${({ theme }) => theme.valueInRem.rem0_5};
		top: -${({ theme }) => theme.valueInRem.rem0_5};
		bottom: -${({ theme }) => theme.valueInRem.rem0_5};
		border-radius: ${({ theme }) => theme.valueInPercent.perc50};
		animation: ${pulseAnimation} 2s linear infinite;
	}

	&::after {
		animation-delay: 1s;
	}
`;

export const UpdateString = styled.p`
	color: ${({ theme }) => theme.mainTextColor};

	@media (max-width: ${({ theme }) => theme.valueInPx.px528}) {
		font-size: ${({ theme }) => theme.valueInRem.rem0_7};
	}
`;
