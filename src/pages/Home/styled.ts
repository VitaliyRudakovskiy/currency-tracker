import {
	getFlex,
	getPercent,
	getPx,
	getRem,
	getValue,
} from '@utils/themeHelper';
import styled from 'styled-components';

const rem1 = getRem('rem1');
const rem2 = getRem('rem2');
const rem3 = getRem('rem3');
const px728 = getPx('px728');
const vh100 = getPercent('vh100');
const primaryBackground = getValue('primaryBackground');
const flexCenter = getFlex('center');

export const HomeWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: ${vh100};
	background-color: ${primaryBackground};
`;

export const HomeContainer = styled.div`
	${flexCenter};
	flex-direction: column;
	padding: ${rem2} ${rem3};
	margin: 0 auto;
	flex: 1;

	@media (max-width: ${px728}) {
		padding: ${rem2} ${rem1};
	}
`;
