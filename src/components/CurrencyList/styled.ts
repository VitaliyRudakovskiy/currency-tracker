import styled from 'styled-components';

const CurrenciesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	max-width: ${({ theme }) => theme.valueInRem.rem70};
	gap: ${({ theme }) => theme.valueInRem.rem1} ${({ theme }) => theme.valueInPercent.vw5};

	@media (max-width: ${({ theme }) => theme.valueInPx.px728}) {
		width: ${({ theme }) => theme.valueInPercent.vw80};
		display: flex;
		flex-direction: column;
	}
`;

export default CurrenciesContainer;
