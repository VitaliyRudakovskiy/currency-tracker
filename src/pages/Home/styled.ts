import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

export const HomeWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.primaryBackground
			: lightTheme.primaryBackground};
`;

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem 3rem;
	margin: 0 auto;
	flex: 1;

	@media (max-width: 728px) {
		padding: 2rem 1rem;
	}
`;
