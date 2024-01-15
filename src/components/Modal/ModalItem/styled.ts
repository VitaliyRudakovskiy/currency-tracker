import { getFlex, getRem, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const flexCenter = getFlex('center');
const rem1and2 = getRem('rem1_2');
const mainTextColor = getValue('mainTextColor');

const ConvertedSumContainer = styled.div`
	${flexCenter};
	font-size: ${rem1and2};
	font-weight: 600;
	color: ${mainTextColor};
`;

export default ConvertedSumContainer;
