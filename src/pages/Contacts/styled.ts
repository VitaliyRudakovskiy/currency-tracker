import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

export const ContactsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.primaryBackground
			: lightTheme.primaryBackground};
`;

export const MainContent = styled.div`
	padding: 1rem 3rem;
	flex: 1;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	@media (max-width: 380px) {
		padding: 1rem 2rem;
		gap: 1rem;
	}
`;

export const ContactsHeader = styled.h2`
	color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.mainTextColor
			: lightTheme.mainTextColor};

	@media (max-width: 380px) {
		font-size: 1.3rem;
	}
`;

export const ContactsText = styled.p`
	font-size: 1.3rem;
	text-align: center;
	color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.mainTextColor
			: lightTheme.mainTextColor};

	@media (max-width: 380px) {
		font-size: 1rem;
	}
`;