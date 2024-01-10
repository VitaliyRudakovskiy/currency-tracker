import styled from 'styled-components';

export const ErrorBoundaryWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 95vh;
	color: black;
`;

export const ErrorBoundaryMessage = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const ErrorBoundaryImage = styled.img`
	width: 280px;
`;
