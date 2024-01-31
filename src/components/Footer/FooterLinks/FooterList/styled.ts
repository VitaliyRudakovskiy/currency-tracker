import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListTitle = styled.p`
	margin-bottom: ${({ theme }) => theme.valueInRem.rem1};

	@media (max-width: ${({ theme }) => theme.valueInPx.px380}) {
		font-size: ${({ theme }) => theme.valueInRem.rem0_9};
	}
`;

export const ListValue = styled.p`
	color: ${({ theme }) => theme.footerListValueColor};
	font-size: ${({ theme }) => theme.valueInRem.rem0_9};
	margin-bottom: ${({ theme }) => theme.valueInRem.rem0_5};
	transition: color 0.3s;

	&:hover {
		color: ${({ theme }) => theme.footerTitleColor};
	}

	@media (max-width: ${({ theme }) => theme.valueInPx.px380}) {
		font-size: ${({ theme }) => theme.valueInRem.rem0_8};
	}
`;

export const FooterLink = styled(Link)`
	text-decoration: none;
`;
