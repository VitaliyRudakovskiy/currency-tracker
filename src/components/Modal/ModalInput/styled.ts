import styled from 'styled-components';

const InputContainer = styled.input`
	background-color: ${({ theme }) => theme.modalElementBackground};
	color: ${({ theme }) => theme.mainTextColor};
	padding: ${({ theme }) => theme.valueInPx.px8};
	border-radius: ${({ theme }) => theme.valueInPx.px4} 0 0 ${({ theme }) => theme.valueInPx.px4};
	border: none;
	outline: none;
	width: ${({ theme }) => theme.valueInRem.rem13};
	font-size: ${({ theme }) => theme.valueInRem.rem1_05};
	text-align: right;

	&:hover,
	&:focus {
		box-shadow: 0 0 ${({ theme }) => theme.valueInPx.px8} ${({ theme }) => theme.modalInputHoverColor};
		border-color: ${({ theme }) => theme.modalInputHoverBorderColor};
	}
`;

export default InputContainer;
