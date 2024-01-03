import { copyrightColor, darkTheme, lightTheme } from '@constants/colors';
import styled, { useTheme } from 'styled-components';

export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	min-width: 100vw;
	padding: 1rem 3rem;
	justify-content: center;
	background-color: ${() =>
		useTheme().mode === 'dark'
			? darkTheme.primaryBackground
			: lightTheme.primaryBackground};
`;

export const FooterInfo = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: start;
	margin-bottom: 2rem;
`;

export const Copyright = styled.div`
	margin: 0 auto;
	color: ${copyrightColor};
`;
