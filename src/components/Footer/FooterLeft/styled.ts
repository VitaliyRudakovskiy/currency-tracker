import { getPx, getRem, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const rem09 = getRem('rem0_9');
const rem1 = getRem('rem1');
const px728 = getPx('px728');
const footerTitleColor = getValue('footerTitleColor');
const mainTextColor = getValue('mainTextColor');

export const LogoSection = styled.div`
	display: flex;
	align-items: center;
	gap: ${rem1};
	margin-bottom: ${rem1};
`;

export const FooterTitle = styled.h4`
	color: ${footerTitleColor};
	font-weight: 600;
`;

export const FooterText = styled.p`
	max-width: 18rem;
	font-weight: 300;
	font-size: ${rem09};
	color: ${mainTextColor};

	@media (max-width: ${px728}) {
		display: none;
	}
`;
