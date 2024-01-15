import { getFlex } from '@utils/themeHelper';
import styled from 'styled-components';

const flexCenter = getFlex('center');

const ChartContainer = styled.div`
	${flexCenter};
	flex-direction: column;
	flex: 1;
`;

export default ChartContainer;
