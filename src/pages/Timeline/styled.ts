import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

const TimelineWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.primaryBackground
			: lightTheme.primaryBackground};
`;

export default TimelineWrapper;
