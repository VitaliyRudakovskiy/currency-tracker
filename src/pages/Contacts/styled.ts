import styled from 'styled-components';

export const ContactsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: ${({ theme }) => theme.valueInPercent.vh100};
	background-color: ${({ theme }) => theme.primaryBackground};
`;

export const MainContent = styled.div`
	${({ theme }) => theme.flex.center};
	color: ${({ theme }) => theme.mainTextColor};
	padding: ${({ theme }) => theme.valueInRem.rem1} ${({ theme }) => theme.valueInRem.rem3};
	flex: 1;
	text-align: center;
	flex-direction: column;
	gap: ${({ theme }) => theme.valueInRem.rem2};

	@media (max-width: ${({ theme }) => theme.valueInPx.px380}) {
		padding: ${({ theme }) => theme.valueInRem.rem1} ${({ theme }) => theme.valueInRem.rem2};
		gap: ${({ theme }) => theme.valueInRem.rem1};
	}
`;

export const ContactsHeader = styled.h2`
	color: ${({ theme }) => theme.textColor};

	@media (max-width: ${({ theme }) => theme.valueInPx.px380}) {
		font-size: ${({ theme }) => theme.valueInRem.rem1_3};
	}
`;

export const ContactsText = styled.p`
	font-size: ${({ theme }) => theme.valueInRem.rem1_3};
	text-align: center;
	color: ${({ theme }) => theme.textColor};

	@media (max-width: ${({ theme }) => theme.valueInPx.px380}) {
		font-size: ${({ theme }) => theme.valueInRem.rem1};
	}
`;
