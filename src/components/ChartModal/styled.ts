import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

export const ChartModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
`;

export const ChartModalContainer = styled.div`
	position: relative;
	background: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.modalBackground
			: lightTheme.modalBackground};
	border-radius: 8px;
	padding: 0.5rem 1.5rem 1rem;
	max-width: 40rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ChartModalTitle = styled.h3`
	text-align: center;
	font-size: 2rem;
	margin-bottom: 1rem;
	color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.mainTextColor
			: lightTheme.mainTextColor};
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 0.1rem;
	right: 0.8rem;
	font-size: 3rem;
	cursor: pointer;
	background: none;
	border: none;
	color: red;
`;

export const InputsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	margin-bottom: 1rem;
`;

export const SubmitButton = styled.button`
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

export const Input = styled.input``;
