import { darkTheme, lightTheme } from '@constants/colors';
import styled, { css } from 'styled-components';

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

interface IThemeProps {
	theme: 'dark' | 'light';
}

export const WelcomeContainer = styled.div<IThemeProps>`
	display: flex;
	justify-content: center;
	width: 100vw;
	padding: 4rem 2rem 1rem;
	gap: 3rem;
	background: ${(props) =>
		props.theme === 'dark'
			? darkTheme.welcomeBackground
			: lightTheme.primaryBackground};
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

export const WelcomeText = styled.p<IThemeProps>`
	max-width: 15rem;
	font-size: 0.9rem;
	text-align: center;
	color: ${(props) =>
		props.theme === 'dark' ? darkTheme.welcomeQuote : lightTheme.mainTextColor};
`;
