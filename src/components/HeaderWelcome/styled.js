import styled, { css } from 'styled-components';

const quoteColor = '#d9d9d9';
const titleMixin = css`
	background: linear-gradient(
		90deg,
		#00ce2c 0.18%,
		#aedf23 49.3%,
		#a3dc00 99.88%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const WelcomeContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
	padding: 4rem 2rem 1rem;
	gap: 3rem;
	background: radial-gradient(circle at center, #004400, #000000);
`;

export const TextSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	text-align: right;
`;

export const WelcomeSubtitle = styled.h1`
	${titleMixin}
	font-size: 2.5rem;
`;

export const WelcomeTitle = styled.p`
	${titleMixin}
	font-size: 3rem;
`;

export const WelcomeText = styled.p`
	max-width: 15rem;
	font-size: 0.9rem;
	text-align: center;
	color: ${quoteColor};
`;
