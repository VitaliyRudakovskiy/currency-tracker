import styled from 'styled-components';

export const ChartButtonsWrapper = styled.section`
	${({ theme }) => theme.flex.center};
	width: ${({ theme }) => theme.valueInPercent.vw100};
	flex-direction: column;
`;

export const ButtonsContainer = styled.div`
	${({ theme }) => theme.flex.center};
	flex-wrap: wrap;
	width: ${({ theme }) => theme.valueInPercent.vw100};
	padding: ${({ theme }) => theme.valueInRem.rem1};
	gap: ${({ theme }) => theme.valueInRem.rem1};
	margin-top: ${({ theme }) => theme.valueInRem.rem2};
	margin-bottom: ${({ theme }) => theme.valueInRem.rem1};
`;

export const ChartButton = styled.button`
	padding: ${({ theme }) => theme.valueInRem.rem0_8} ${({ theme }) => theme.valueInRem.rem1_2};
	font-size: ${({ theme }) => theme.valueInRem.rem1};
	font-weight: 600;
	letter-spacing: ${({ theme }) => theme.valueInPx.px1};
	background-color: ${({ theme }) => theme.chartButtonBackgroundColor};
	color: ${({ theme }) => theme.chartButtonTextColor};
	border: none;
	border-radius: ${({ theme }) => theme.valueInPx.px5};
	transition: all 0.3s;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.chartButtonHoverColor};
	}

	&:active {
		background-color: ${({ theme }) => theme.chartButtonActiveColor};
		box-shadow: inset 0 0 ${({ theme }) => theme.valueInPx.px10} rgba(0, 0, 0, 0.3);
	}

	@media (${({ theme }) => theme.valueInPx.px380}) {
		font-size: ${({ theme }) => theme.valueInRem.rem0_7};
		font-weight: 400;
		padding: ${({ theme }) => theme.valueInRem.rem0_6} ${({ theme }) => theme.valueInRem.rem0_9};
	}
`;

export const DatesErrorMessage = styled.p`
	margin-top: ${({ theme }) => theme.valueInRem.rem1};
	padding: 0 ${({ theme }) => theme.valueInRem.rem1};
	text-align: center;
	color: ${({ theme }) => theme.mainTextColor};
	text-shadow:
		0 0 ${({ theme }) => theme.valueInPx.px10} red,
		0 0 ${({ theme }) => theme.valueInPx.px20} red,
		0 0 ${({ theme }) => theme.valueInPx.px30} red,
		0 0 ${({ theme }) => theme.valueInPx.px40} red;
`;
