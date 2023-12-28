import styled from 'styled-components';

const backgroundModalColor = '#00000080';

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${backgroundModalColor};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContainer = styled.div``;
