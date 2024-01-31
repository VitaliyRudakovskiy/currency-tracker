import styled from 'styled-components';

export const HomeWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: ${({ theme }) => theme.valueInPercent.vh100};
	background-color: ${({ theme }) => theme.primaryBackground};
`;

export const HomeContainer = styled.div`
	${({ theme }) => theme.flex.center};
	flex-direction: column;
	padding: ${({ theme }) => theme.valueInRem.rem2} ${({ theme }) => theme.valueInRem.rem3};
	margin: 0 auto;
	flex: 1;

	@media (max-width: ${({ theme }) => theme.valueInPx.px728}) {
		padding: ${({ theme }) => theme.valueInRem.rem2} ${({ theme }) => theme.valueInRem.rem1};
	}
`;
