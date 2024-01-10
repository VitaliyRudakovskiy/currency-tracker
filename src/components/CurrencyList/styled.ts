import styled from 'styled-components';

const CurrenciesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	max-width: 70rem;
	gap: 1rem 5vw;

	@media (max-width: 728px) {
		width: 80dvw;
		display: flex;
		flex-direction: column;
	}
`;

export default CurrenciesContainer;
