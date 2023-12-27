import styled from 'styled-components';

const copyrightColor = '#898989';

export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	min-width: 100vw;
	padding: 1rem 3rem;
	justify-content: center;
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
