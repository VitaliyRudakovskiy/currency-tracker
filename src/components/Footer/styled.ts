import styled from 'styled-components';

export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	min-width: ${({ theme }) => theme.valueInPercent.wFull};
	padding: ${({ theme }) => theme.valueInRem.rem1} ${({ theme }) => theme.valueInRem.rem3};
	justify-content: center;
	background-color: ${({ theme }) => theme.primaryBackground};

	@media (max-width: ${({ theme }) => theme.valueInPx.px380}) {
		padding: ${({ theme }) => theme.valueInRem.rem1} ${({ theme }) => theme.valueInRem.rem1_5};
	}
`;

export const FooterInfo = styled.div`
	width: ${({ theme }) => theme.valueInPercent.wFull};
	display: flex;
	justify-content: space-between;
	align-items: start;
	margin-bottom: ${({ theme }) => theme.valueInRem.rem2};
	color: ${({ theme }) => theme.mainTextColor};

	@media (max-width: ${({ theme }) => theme.valueInPx.px728}) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Copyright = styled.div`
	margin: 0 auto;
	color: ${({ theme }) => theme.footerCopyrightColor};
	text-align: center;
`;
