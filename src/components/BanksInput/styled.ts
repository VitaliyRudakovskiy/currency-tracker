import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

export const MapInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	padding: 0 3rem;
`;

export const MapInput = styled.input`
	width: 40%;
	text-align: center;
	margin-bottom: 1rem;
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.modalElementBackground
			: lightTheme.modalElementBackground};
	color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.mainTextColor
			: lightTheme.mainTextColor};
	padding: 8px;
	border: none;
	border-radius: 4px;
	outline: none;
	font-size: 1.25rem;

	&:hover,
	&:focus {
		box-shadow: 0 0 8px #00bcd480;
		border-color: #00bcd4;
	}

	@media (max-width: 1010px) {
		width: 50%;
	}

	@media (max-width: 810px) {
		width: 70%;
	}

	@media (max-width: 580px) {
		width: 100%;
		font-size: 1rem;
	}
`;

export const MapTooltipsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	justify-content: center;
	align-items: center;
	gap: 0.2rem;
	margin: 0 auto;
	width: 40%;
	max-height: 6.5rem;
	overflow-y: auto;
	margin-bottom: 1rem;

	scrollbar-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.modalElementBackground
			: lightTheme.modalElementBackground};

	&::-webkit-scrollbar {
		width: 0.7rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${() =>
			useTheme().mode === 'dark'
				? darkTheme.mainTextColor
				: lightTheme.mainTextColor};
		border-radius: 4px;
	}

	@media (max-width: 1010px) {
		width: 50%;
	}

	@media (max-width: 810px) {
		width: 70%;
	}

	@media (max-width: 580px) {
		width: 100%;
	}

	@media (max-width: 380px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const MapTooltip = styled.button`
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.modalElementBackground
			: lightTheme.modalElementBackground};
	color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.mainTextColor
			: lightTheme.mainTextColor};
	padding: 8px;
	border: none;
	border-radius: 4px;
	transition: all 0.1s;
	cursor: pointer;

	&:hover,
	&:focus,
	&:active {
		background-color: #00bcd4;
	}
`;
