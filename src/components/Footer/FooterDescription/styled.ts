import styled from 'styled-components';

export const LogoSection = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.valueInRem.rem1};
	margin-bottom: ${({ theme }) => theme.valueInRem.rem1};
`;

export const FooterTitle = styled.h4`
	color: ${({ theme }) => theme.footerTitleColor};
	font-weight: 600;
`;

export const FooterText = styled.p`
	max-width: 18rem;
	font-weight: 300;
	font-size: ${({ theme }) => theme.valueInRem.rem0_9};
	color: ${({ theme }) => theme.mainTextColor};

	@media (max-width: ${({ theme }) => theme.valueInPx.px728}) {
		display: none;
	}
`;
