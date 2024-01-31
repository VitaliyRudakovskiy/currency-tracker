import styled from 'styled-components';

const ChartInputsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: ${({ theme }) => theme.valueInRem.rem1};
	margin-bottom: ${({ theme }) => theme.valueInRem.rem1};

	@media (max-width: ${({ theme }) => theme.valueInPx.px464}) {
		display: flex;
		flex-direction: column;
	}
`;

export default ChartInputsContainer;
