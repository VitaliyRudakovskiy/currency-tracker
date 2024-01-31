import styled from 'styled-components';

export const ChartInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.mainTextColor};
`;

export const ChartInput = styled.input`
	background-color: ${({ theme }) => theme.modalElementBackground};
	color: inherit;
	padding: ${({ theme }) => theme.valueInPx.px8};
	border-radius: ${({ theme }) => theme.valueInPx.px4};
	border: none;
	outline: none;
	text-align: center;
	width: ${({ theme }) => theme.valueInRem.rem11};
	font-size: ${({ theme }) => theme.valueInRem.rem1};

	&:hover,
	&:focus {
		box-shadow: 0 0 ${({ theme }) => theme.valueInPx.px8} ${({ theme }) => theme.modalInputHoverColor};
		border-color: ${({ theme }) => theme.modalInputHoverBorderColor};
	}
`;
