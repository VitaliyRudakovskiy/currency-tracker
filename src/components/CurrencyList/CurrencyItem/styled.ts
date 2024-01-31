import styled from 'styled-components';

export const CurrencyItemContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.valueInRem.rem1};
	background-color: ${({ theme }) => theme.currencyItemBackground};
	border-radius: ${({ theme }) => theme.valueInPx.px6};
	padding: ${({ theme }) => theme.valueInRem.rem1} ${({ theme }) => theme.valueInRem.rem1_5};
	transition: all 0.3s;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}

	@media (max-width: ${({ theme }) => theme.valueInPx.px728}) {
		width: ${({ theme }) => theme.valueInPercent.wFull};
		padding: ${({ theme }) => theme.valueInRem.rem0_5} ${({ theme }) => theme.valueInRem.rem1};
	}
`;

export const CurrencyInfoSection = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.currencyItemTextColor};

	@media (max-width: ${({ theme }) => theme.valueInPx.px528}) {
		font-size: ${({ theme }) => theme.valueInRem.rem0_8};
	}
`;

export const CurrencyImage = styled.img`
	width: ${({ theme }) => theme.valueInPx.px60};

	@media (max-width: ${({ theme }) => theme.valueInPx.px728}) {
		width: ${({ theme }) => theme.valueInPx.px40};
	}
`;
