import styled from 'styled-components';

const ChartInputsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	margin-bottom: 1rem;

	@media (max-width: 464px) {
		display: flex;
		flex-direction: column;
	}
`;

export default ChartInputsContainer;
