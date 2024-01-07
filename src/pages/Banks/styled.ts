import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

const BanksContainer = styled.div`
	padding-top: 1rem;
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.primaryBackground
			: lightTheme.primaryBackground};
`;

export default BanksContainer;
