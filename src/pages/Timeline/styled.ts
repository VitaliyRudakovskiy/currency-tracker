import { getPercent, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const vh100 = getPercent('vh100');
const primaryBackground = getValue('primaryBackground');

const TimelineWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: ${vh100};
	background-color: ${primaryBackground};
`;

export default TimelineWrapper;
