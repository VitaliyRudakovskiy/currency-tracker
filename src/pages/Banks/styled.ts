import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

export const BanksWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.primaryBackground
			: lightTheme.primaryBackground};
`;

export const BanksContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 1rem;
	flex: 1;
`;
