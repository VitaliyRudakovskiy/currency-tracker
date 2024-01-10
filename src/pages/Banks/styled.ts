import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

export const BanksWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100vw;
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.primaryBackground
			: lightTheme.primaryBackground};
`;

export const BanksContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	width: 100%;
	flex: 1;
`;
