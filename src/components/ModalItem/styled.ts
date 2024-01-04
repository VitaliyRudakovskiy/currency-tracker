import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

const ConvertedSumContainer = styled.div`
	font-size: 1.2rem;
	font-weight: 600;
	color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.mainTextColor
			: lightTheme.mainTextColor};
	margin-bottom: 0.5rem;
`;

export default ConvertedSumContainer;
