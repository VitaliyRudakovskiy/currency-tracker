import styled from 'styled-components';

const Dropdown = styled.select`
	background-color: ${({ theme }) => theme.modalElementBackground};
	color: ${({ theme }) => theme.mainTextColor};
	padding: ${({ theme }) => theme.valueInPx.px10};
	border-radius: ${({ theme }) => theme.valueInPx.px4};
	border: none;
	outline: none;
	width: ${({ theme }) => theme.valueInRem.rem6};
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
`;

export default Dropdown;
