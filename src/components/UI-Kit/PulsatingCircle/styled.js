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

export const PulseCircle = styled.div`
	position: relative;
	border-radius: 50%;
	background: #00bc4f;
	width: 1rem;
	height: 1rem;

	&::before,
	&::after {
		content: '';
		position: absolute;
		border: 1px solid #00bc4f;
		left: -0.5rem;
		opacity: 0;
		right: -0.5rem;
		top: -0.5rem;
		bottom: -0.5rem;
		border-radius: 50%;
		animation: ${pulseAnimation} 2s linear infinite;
	}

	&::after {
		animation-delay: 1s;
	}
`;
