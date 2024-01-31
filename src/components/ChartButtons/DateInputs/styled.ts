import styled from 'styled-components';

export const SelectsContainer = styled.div`
	${({ theme }) => theme.flex.center};
	gap: ${({ theme }) => theme.valueInRem.rem1};
`;

export const DatesSelect = styled.select`
	background-color: ${({ theme }) => theme.modalElementBackground};
	color: ${({ theme }) => theme.mainTextColor};
	padding: ${({ theme }) => theme.valueInRem.rem0_8} ${({ theme }) => theme.valueInPx.px8};
	border: none;
	outline: none;
	border-radius: ${({ theme }) => theme.valueInPx.px4};
	text-align: center;
	font-size: ${({ theme }) => theme.valueInRem.rem1};
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 ${({ theme }) => theme.valueInPx.px8} rgba(0, 188, 212, 0.5);
		border-color: ${({ theme }) => theme.modalInputHoverBorderColor};
	}

	&::-ms-expand {
		display: none;
	}

	option {
		background-color: ${({ theme }) => theme.modalElementBackground};
		color: ${({ theme }) => theme.mainTextColor};
	}

	@media (max-width: ${({ theme }) => theme.valueInPx.px380}) {
		font-size: ${({ theme }) => theme.valueInRem.rem0_7};
		padding: ${({ theme }) => theme.valueInRem.rem0_6} ${({ theme }) => theme.valueInRem.rem0_9};
	}
`;
