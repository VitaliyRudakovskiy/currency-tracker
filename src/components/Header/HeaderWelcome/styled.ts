import { titleMixin } from '@constants/theme';
import styled from 'styled-components';

export const WelcomeContainer = styled.div`
	${({ theme }) => theme.flex.center};
	width: ${({ theme }) => theme.valueInPercent.wFull};
	padding: ${({ theme }) => theme.valueInRem.rem4} ${({ theme }) => theme.valueInRem.rem2} ${({ theme }) => theme.valueInRem.rem1};
	gap: ${({ theme }) => theme.valueInRem.rem3};
	background: ${({ theme }) => theme.welcomeBackground};

	@media (max-width: ${({ theme }) => theme.valueInPx.px528}) {
		padding: ${({ theme }) => theme.valueInRem.rem3} ${({ theme }) => theme.valueInRem.rem2} ${({ theme }) => theme.valueInRem.rem1};
	}
`;

export const WelcomeImage = styled.img`
	width: ${({ theme }) => theme.valueInPx.px170};
	height: ${({ theme }) => theme.valueInPx.px170};

	@media (max-width: ${({ theme }) => theme.valueInPx.px728}) {
		display: none;
	}
`;

export const TextSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	text-align: right;

	@media (max-width: ${({ theme }) => theme.valueInPx.px728}) {
		align-items: center;
		text-align: center;
	}
`;

export const WelcomeSubtitle = styled.h1`
	${titleMixin};
	font-size: ${({ theme }) => theme.valueInRem.rem2_5};

	@media (max-width: ${({ theme }) => theme.valueInPx.px728}) {
		font-size: ${({ theme }) => theme.valueInRem.rem2};
	}
`;

export const WelcomeTitle = styled.p`
	${titleMixin};
	font-size: ${({ theme }) => theme.valueInRem.rem3};

	@media (max-width: ${({ theme }) => theme.valueInPx.px728}) {
		font-size: ${({ theme }) => theme.valueInRem.rem2};
	}
`;

export const WelcomeText = styled.p`
	max-width: ${({ theme }) => theme.valueInRem.rem15};
	font-size: ${({ theme }) => theme.valueInRem.rem0_9};
	text-align: center;
	color: ${({ theme }) => theme.welcomeQuote};

	@media (max-width: ${({ theme }) => theme.valueInPx.px528}) {
		font-size: ${({ theme }) => theme.valueInRem.rem0_7};
	}
`;
