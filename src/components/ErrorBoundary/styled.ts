import styled from 'styled-components';

export const ErrorBoundaryWrapper = styled.section`
	${({ theme }) => theme.flex.center};
	text-align: center;
	height: ${({ theme }) => theme.valueInPercent.vh95};
	color: black;
`;

export const ErrorBoundaryMessage = styled.div`
	${({ theme }) => theme.flex.center};
	flex-direction: column;
`;

export const ErrorBoundaryImage = styled.img`
	width: ${({ theme }) => theme.valueInPx.px280};
`;
