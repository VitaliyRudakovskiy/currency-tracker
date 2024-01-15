import { Link } from 'react-router-dom';
import { getPx, getRem, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const rem05 = getRem('rem0_5');
const rem08 = getRem('rem0_8');
const rem09 = getRem('rem0_9');
const rem1 = getRem('rem1');
const px380 = getPx('px380');
const footerListValueColor = getValue('footerListValueColor');
const footerTitleColor = getValue('footerTitleColor');

export const ListTitle = styled.p`
	margin-bottom: ${rem1};

	@media (max-width: ${px380}) {
		font-size: ${rem09};
	}
`;

export const ListValue = styled.p`
	color: ${footerListValueColor};
	font-size: ${rem09};
	margin-bottom: ${rem05};
	transition: color 0.3s;

	&:hover {
		color: ${footerTitleColor};
	}

	@media (max-width: ${px380}) {
		font-size: ${rem08};
	}
`;

export const FooterLink = styled(Link)`
	text-decoration: none;
`;
