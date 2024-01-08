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
`;
