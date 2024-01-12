import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

const ConvertedSumContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 600;
	color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.mainTextColor
			: lightTheme.mainTextColor};
`;

export default ConvertedSumContainer;
