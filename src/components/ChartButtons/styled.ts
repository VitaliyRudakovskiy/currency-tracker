import styled from 'styled-components';

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	justify-content: center;
	gap: 1rem;
	margin-top: 2rem;
	margin-bottom: 0.1rem;
`;

export const ChartButton = styled.button`
	padding: 0.8rem 1.2rem;
	font-size: 1rem;
	font-weight: 600;
	letter-spacing: 1px;
	background-color: #4caf50;
	color: #fff;
	border: none;
	border-radius: 5px;
	transition: all 0.3s;
	cursor: pointer;

	&:hover {
		background-color: #45a049;
	}

	&:active {
		background-color: #3c943e;
		box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
	}
`;
