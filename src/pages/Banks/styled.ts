import styled from 'styled-components';

export const BanksWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: ${({ theme }) => theme.valueInPercent.vh100};
	width: ${({ theme }) => theme.valueInPercent.vw100};
	background-color: ${({ theme }) => theme.primaryBackground};
`;

export const BanksContainer = styled.div`
	${({ theme }) => theme.flex.center};
	flex-direction: column;
	padding: ${({ theme }) => theme.valueInRem.rem0_7};
	width: ${({ theme }) => theme.valueInPercent.wFull};
	flex: 1;
`;
