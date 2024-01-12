import styled from 'styled-components';
import { Link } from 'react-router-dom';

const listValueColor = '#898989';

export const ListTitle = styled.p`
	margin-bottom: 1rem;

	@media (max-width: 380px) {
		font-size: 0.9rem;
	}
`;

export const ListValue = styled.p`
	color: ${listValueColor};
	font-size: 0.9rem;
	margin-bottom: 0.5rem;
	transition: color 0.3s;

	&:hover {
		color: #a3dc00;
	}

	@media (max-width: 380px) {
		font-size: 0.8rem;
	}
`;

export const FooterLink = styled(Link)`
	text-decoration: none;
`;
