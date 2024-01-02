import styled from 'styled-components';

const containerColor = '#202025';
const containerBorderColor = '#474747';
const textColor = '#d9d9d9';

export const ItemContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 1rem;
	background-color: ${containerColor};
	border: 1px solid ${containerBorderColor};
	border-radius: 6px;
	padding: 1rem 1.5rem;
	transform: all 2s;
	cursor: pointer;

	&:hover {
		outline: 6px solid ${containerBorderColor};
		border-radius: 2px;
	}
`;

export const InfoSection = styled.div`
	display: flex;
	flex-direction: column;
	color: ${textColor};
`;
