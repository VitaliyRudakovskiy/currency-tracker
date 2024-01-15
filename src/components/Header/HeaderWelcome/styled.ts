import { getFlex, getPx, getRem, getValue } from '@utils/themeHelper';
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

const rem07 = getRem('rem0_7');
const rem09 = getRem('rem0_9');
const rem1 = getRem('rem1');
const rem2 = getRem('rem2');
const rem25 = getRem('rem2_5');
const rem3 = getRem('rem3');
const rem4 = getRem('rem4');
const rem15 = getRem('rem15');
const px170 = getPx('px170');
const px528 = getPx('px528');
const px728 = getPx('px728');
const welcomeBackground = getValue('welcomeBackground');
const welcomeQuote = getValue('welcomeQuote');
const flexCenter = getFlex('center');

export const WelcomeContainer = styled.div`
	${flexCenter};
	width: 100vw;
	padding: ${rem4} ${rem2} ${rem1};
	gap: ${rem3};
	background: ${welcomeBackground};

	@media (max-width: ${px528}) {
		padding: ${rem3} ${rem2} ${rem1};
	}
`;

export const WelcomeImage = styled.img`
	width: ${px170};
	height: ${px170};

	@media (max-width: ${px728}) {
		display: none;
	}
`;

export const TextSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	text-align: right;

	@media (max-width: ${px728}) {
		align-items: center;
		text-align: center;
	}
`;

export const WelcomeSubtitle = styled.h1`
	${titleMixin}
	font-size: ${rem25};

	@media (max-width: ${px728}) {
		font-size: ${rem2};
	}
`;

export const WelcomeTitle = styled.p`
	${titleMixin}
	font-size: ${rem3};

	@media (max-width: ${px728}) {
		font-size: ${rem2};
	}
`;

export const WelcomeText = styled.p`
	max-width: ${rem15};
	font-size: ${rem09};
	text-align: center;
	color: ${welcomeQuote};

	@media (max-width: ${px528}) {
		font-size: ${rem07};
	}
`;
