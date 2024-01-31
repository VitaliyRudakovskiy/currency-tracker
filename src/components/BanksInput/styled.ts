import styled from 'styled-components';

export const MapInputContainer = styled.div`
	${({ theme }) => theme.flex.center};
	flex-direction: column;
	width: ${({ theme }) => theme.valueInPercent.vw100};
	padding: 0 ${({ theme }) => theme.valueInRem.rem3};
`;

export const MapInput = styled.input`
	width: ${({ theme }) => theme.valueInPercent.perc40};
	text-align: center;
	margin-bottom: ${({ theme }) => theme.valueInRem.rem1};
	background-color: ${({ theme }) => theme.modalElementBackground};
	color: ${({ theme }) => theme.mainTextColor};
	padding: ${({ theme }) => theme.valueInPx.px8};
	border: none;
	outline: none;
	border-radius: ${({ theme }) => theme.valueInPx.px4};
	font-size: ${({ theme }) => theme.valueInRem.rem1_25};

	&:hover,
	&:focus {
		box-shadow: 0 0 ${({ theme }) => theme.valueInPx.px8} ${({ theme }) => theme.modalInputHoverColor};
		border-color: ${({ theme }) => theme.modalInputHoverBorderColor};
	}

	@media (max-width: ${({ theme }) => theme.valueInPx.px1010}) {
		width: ${({ theme }) => theme.valueInPercent.perc50};
	}

	@media (max-width: ${({ theme }) => theme.valueInPx.px810}) {
		width: ${({ theme }) => theme.valueInPercent.perc70};
	}

	@media (max-width: ${({ theme }) => theme.valueInPx.px510}) {
		width: ${({ theme }) => theme.valueInPercent.wFull};
		font-size: ${({ theme }) => theme.valueInRem.rem1};
	}
`;

export const MapTooltipsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.valueInRem.rem0_2};
	margin: 0 auto;
	width: ${({ theme }) => theme.valueInPercent.perc40};
	max-height: ${({ theme }) => theme.valueInRem.rem6_5};
	overflow-y: auto;
	margin-bottom: ${({ theme }) => theme.valueInRem.rem1};

	scrollbar-color: ${({ theme }) => theme.modalElementBackground};

	&::-webkit-scrollbar {
		width: ${({ theme }) => theme.valueInRem.re0_7};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.mainTextColor};
		border-radius: ${({ theme }) => theme.valueInPx.px4};
	}

	@media (max-width: ${({ theme }) => theme.valueInPx.px1010}) {
		width: ${({ theme }) => theme.valueInPercent.perc50};
	}

	@media (max-width: ${({ theme }) => theme.valueInPx.px810}) {
		width: ${({ theme }) => theme.valueInPercent.perc70};
	}

	@media (max-width: ${({ theme }) => theme.valueInPx.px510}) {
		width: ${({ theme }) => theme.valueInPercent.wFull};
	}

	@media (max-width: ${({ theme }) => theme.valueInPx.px380}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const MapTooltip = styled.button`
	background-color: ${({ theme }) => theme.modalElementBackground};
	color: ${({ theme }) => theme.mainTextColor};
	padding: ${({ theme }) => theme.valueInPx.px8};
	border: none;
	border-radius: ${({ theme }) => theme.valueInPx.px4};
	transition: all 0.1s;
	cursor: pointer;

	&:hover,
	&:focus,
	&:active {
		background-color: ${({ theme }) => theme.modalInputHoverBorderColor};
	}
`;
