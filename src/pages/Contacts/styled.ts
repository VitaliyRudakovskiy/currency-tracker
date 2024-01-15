import {
	getFlex,
	getPercent,
	getPx,
	getRem,
	getValue,
} from '@utils/themeHelper';
import styled from 'styled-components';

const rem1 = getRem('rem1');
const rem1and3 = getRem('rem1_3');
const rem2 = getRem('rem2');
const rem3 = getRem('rem3');
const px380 = getPx('px380');
const vh100 = getPercent('vh100');
const textColor = getValue('textColor');
const primaryBackground = getValue('primaryBackground');
const flexCenter = getFlex('center');

export const ContactsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: ${vh100};
	background-color: ${primaryBackground};
`;

export const MainContent = styled.div`
	padding: ${rem1} ${rem3};
	flex: 1;
	text-align: center;
	${flexCenter};
	flex-direction: column;
	gap: ${rem2};

	@media (max-width: ${px380}) {
		padding: ${rem1} ${rem2};
		gap: ${rem1};
	}
`;

export const ContactsHeader = styled.h2`
	color: ${textColor};

	@media (max-width: ${px380}) {
		font-size: ${rem1and3};
	}
`;

export const ContactsText = styled.p`
	font-size: ${rem1and3};
	text-align: center;
	color: ${textColor};

	@media (max-width: ${px380}) {
		font-size: ${rem1};
	}
`;
