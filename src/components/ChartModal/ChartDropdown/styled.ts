import styled from 'styled-components';

const DropdownContainer = styled.select`
	background-color: ${({ theme }) => theme.modalElementBackground};
	color: ${({ theme }) => theme.mainTextColor};
	padding: ${({ theme }) => theme.valueInPx.px8};
	border: none;
	border-radius: ${({ theme }) => theme.valueInPx.px4};
	outline: none;
	width: ${({ theme }) => theme.valueInRem.rem9};
	text-align: center;
	margin-bottom: ${({ theme }) => theme.valueInRem.rem1};
	font-size: ${({ theme }) => theme.valueInRem.rem1};
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 ${({ theme }) => theme.valueInPx.px8} rgba(0, 188, 212, 0.5);
		border-color: #00bcd4;
	}

	&::-ms-expand {
		display: none;
	}

	option {
		background-color: ${({ theme }) => theme.modalElementBackground};
		color: ${({ theme }) => theme.mainTextColor};
	}
`;

export default DropdownContainer;
