import { getFlex, getPercent, getRem } from '@utils/themeHelper';
import styled from 'styled-components';

const flexCenter = getFlex('center');
const wFull = getPercent('w-full');
const rem0and3 = getRem('rem0_3');

const MapContainer = styled.div`
	width: ${wFull};
	padding: ${rem0and3};
	${flexCenter};
	flex-direction: column;
`;

export default MapContainer;
