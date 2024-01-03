import styled from 'styled-components';

const containerColor = '#202025';
const textColor = '#d9d9d9';

export const ItemContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 1rem;
	background-color: ${containerColor};
	border-radius: 6px;
	padding: 1rem 1.5rem;
	transition: all 0.3s;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
`;

export const InfoSection = styled.div`
	display: flex;
	flex-direction: column;
	color: ${textColor};
`;
