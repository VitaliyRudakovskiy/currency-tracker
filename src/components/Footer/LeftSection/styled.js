import styled from 'styled-components';

const titleColor = '#A3DC00';

export const LogoSection = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1rem;
`;

export const FooterTitle = styled.h4`
	color: ${titleColor};
	font-weight: 600;
`;

export const FooterText = styled.p`
	max-width: 18rem;
	font-weight: 300;
	font-size: 0.9rem;
`;
