import { getPercent, getPx, getRem, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const rem1 = getRem('rem1');
const rem1and5 = getRem('rem1_5');
const rem2 = getRem('rem2');
const rem3 = getRem('rem3');
const vw100 = getPercent('vw100');
const wfull = getPercent('w-full');
const px380 = getPx('px380');
const px728 = getPx('px728');
const mainTextColor = getValue('mainTextColor');
const primaryBackground = getValue('primaryBackground');
const footerCopyrightColor = getValue('footerCopyrightColor');

export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	min-width: ${vw100};
	padding: ${rem1} ${rem3};
	justify-content: center;
	background-color: ${primaryBackground};

	@media (max-width: ${px380}) {
		padding: ${rem1} ${rem1and5};
	}
`;

export const FooterInfo = styled.div`
	width: ${wfull};
	display: flex;
	justify-content: space-between;
	align-items: start;
	margin-bottom: ${rem2};
	color: ${mainTextColor};

	@media (max-width: ${px728}) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Copyright = styled.div`
	margin: 0 auto;
	color: ${footerCopyrightColor};
	text-align: center;
`;
