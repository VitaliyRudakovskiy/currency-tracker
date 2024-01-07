import { darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

const TimelineContainer = styled.div`
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.primaryBackground
			: lightTheme.primaryBackground};
`;

export default TimelineContainer;
