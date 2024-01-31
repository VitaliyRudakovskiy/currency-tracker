import styled from 'styled-components';

export const ChartModalOverlay = styled.div`
	${({ theme }) => theme.flex.center};
	position: fixed;
	top: 0;
	left: 0;
	width: ${({ theme }) => theme.valueInPercent.wFull};
	height: ${({ theme }) => theme.valueInPercent.wFull};
	background: transparent;
	z-index: ${({ theme }) => theme.zIndex.z10};
`;

export const ChartModalContainer = styled.div`
	${({ theme }) => theme.flex.center};
	position: relative;
	background: ${({ theme }) => theme.modalBackground};
	border-radius: ${({ theme }) => theme.valueInPx.px8};
	padding: ${({ theme }) => theme.valueInRem.rem0_5} ${({ theme }) => theme.valueInRem.rem1_5} ${({ theme }) => theme.valueInRem.rem1};
	max-width: ${({ theme }) => theme.valueInRem.rem40};
	box-shadow: 0 0 ${({ theme }) => theme.valueInPx.px10} rgba(0, 0, 0, 0.2);
	flex-direction: column;
`;

export const ChartModalTitle = styled.h3`
	text-align: center;
	font-size: ${({ theme }) => theme.valueInRem.rem2};
	margin-bottom: ${({ theme }) => theme.valueInRem.rem1};
	color: ${({ theme }) => theme.mainTextColor};

	@media (max-width: ${({ theme }) => theme.valueInPx.px464}) {
		font-size: ${({ theme }) => theme.valueInRem.rem1_3};
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: ${({ theme }) => theme.valueInRem.rem0_8};
	font-size: ${({ theme }) => theme.valueInRem.rem3};
	background: none;
	border: none;
	color: red;
	cursor: pointer;

	@media (max-width: ${({ theme }) => theme.valueInPx.px464}) {
		top: -${({ theme }) => theme.valueInRem.rem0_2};
	}
`;

export const SubmitButton = styled.button`
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
`;
