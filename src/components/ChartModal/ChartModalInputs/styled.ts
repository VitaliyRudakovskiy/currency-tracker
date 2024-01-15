import { getPx, getRem } from '@utils/themeHelper';
import styled from 'styled-components';

const rem1 = getRem('rem1');
const px464 = getPx('px464');

const ChartInputsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: ${rem1};
	margin-bottom: ${rem1};

	@media (max-width: ${px464}) {
		display: flex;
		flex-direction: column;
	}
`;

export default ChartInputsContainer;
