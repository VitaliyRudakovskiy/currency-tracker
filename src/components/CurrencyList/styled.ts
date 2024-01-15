import { getPercent, getPx, getRem } from '@utils/themeHelper';
import styled from 'styled-components';

const rem1 = getRem('rem1');
const rem70 = getRem('rem70');
const vw5 = getPercent('vw5');
const vw80 = getPercent('vw80');
const px728 = getPx('px728');

const CurrenciesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	max-width: ${rem70};
	gap: ${rem1} ${vw5};

	@media (max-width: ${px728}) {
		width: ${vw80};
		display: flex;
		flex-direction: column;
	}
`;

export default CurrenciesContainer;
