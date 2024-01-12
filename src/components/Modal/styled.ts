import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

interface IThemeProps {
	theme: 'dark' | 'light';
}

export const ModalOverlay = styled.div`
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

export const ModalContainer = styled.div<IThemeProps>`
	position: relative;
	background: ${(props) =>
		props.theme === 'dark'
			? darkTheme.modalBackground
			: lightTheme.modalBackground};
	border-radius: 8px;
	padding: 0.3rem 1.5rem 1.2rem;
	max-width: 30rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 380px) {
		padding: 0.5rem 0.5rem 0;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 0.2rem;
	right: 0.8rem;
	font-size: 3rem;
	cursor: pointer;
	background: none;
	border: none;
	color: red;

	@media (max-width: 380px) {
		top: 0;
		right: 0.8rem;
	}
`;

export const ModalName = styled.h3`
	text-align: center;
	font-size: 2rem;
	margin-bottom: 1rem;
	color: #acde1d;

	@media (max-width: 380px) {
		font-size: 1.5rem;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
`;

export const InputActiveCode = styled.p`
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.modalElementBackground
			: lightTheme.modalElementBackground};
	color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.mainTextColor
			: lightTheme.mainTextColor};
	padding: 0.35rem 0.5rem;
	border-radius: 0 4px 4px 0;
`;

export const ResultContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;
