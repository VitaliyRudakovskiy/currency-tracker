import { getFlex, getPercent, getRem, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const rem07 = getRem('rem0_7');
const wFull = getPercent('w-full');
const vw100 = getPercent('vw100');
const vh100 = getPercent('vh100');
const primaryBackground = getValue('primaryBackground');
const flexCenter = getFlex('center');

export const BanksWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: ${vh100};
	width: ${vw100};
	background-color: ${primaryBackground};
`;

export const BanksContainer = styled.div`
	${flexCenter};
	flex-direction: column;
	padding: ${rem07};
	width: ${wFull};
	flex: 1;
`;
